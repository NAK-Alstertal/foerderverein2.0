<?php
/**
 * NAKFörderverein — Contact Form Endpoint
 * Usage: POST /api/contact   { name, email, message }
 *
 * Postmark-Server-Token: aus Env NAKHH_POSTMARK_TOKEN (live NAK-Alstertal-Server),
 * Fallback auf server-lokale Datei .contact-token (nicht im Git, ausserhalb Web-Root). Absender muss auf dem
 * NAK-Alstertal-Server verifiziert sein (nak-alstertal.de ist DKIM-verifiziert).
 */

$POSTMARK_TOKEN = getenv('NAKHH_POSTMARK_TOKEN') ?: '';
// Fallback: server-lokale Token-Datei ausserhalb des web-servierten Ordners
// (/var/www/NAKFoerdervereinAlstertal/.contact-token), lesbar fuer den fpm-User.
if ($POSTMARK_TOKEN === '') {
    $tokenFile = dirname(__DIR__, 2) . '/.contact-token';
    if (is_readable($tokenFile)) {
        $POSTMARK_TOKEN = trim((string) file_get_contents($tokenFile));
    }
}
define('POSTMARK_TOKEN', $POSTMARK_TOKEN);
define('MAIL_FROM',      'info@nak-alstertal.de');
define('MAIL_FROM_NAME', 'Förderverein NAK Alstertal');
define('MAIL_TO',        'verein@nak-alstertal.de');

header('Access-Control-Allow-Origin: https://verein.nak-alstertal.de');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$body = json_decode(file_get_contents('php://input'), true);
$name    = trim((string) ($body['name']    ?? ''));
$email   = trim((string) ($body['email']   ?? ''));
$message = trim((string) ($body['message'] ?? ''));

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

if (POSTMARK_TOKEN === '') {
    error_log('[verein-contact] Missing Postmark token');
    http_response_code(500);
    echo json_encode(['error' => 'Mail delivery failed']);
    exit;
}

$nameSafe    = htmlspecialchars($name,    ENT_QUOTES, 'UTF-8');
$emailSafe   = htmlspecialchars($email,   ENT_QUOTES, 'UTF-8');
$messageSafe = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));

$html = "
<p>Eine neue Kontaktanfrage über die Vereinswebsite:</p>
<table cellpadding='8' style='border-collapse:collapse;font-family:sans-serif;font-size:14px'>
  <tr><td style='color:#64748b;width:80px'>Name</td><td><strong>{$nameSafe}</strong></td></tr>
  <tr><td style='color:#64748b'>E-Mail</td><td><a href='mailto:{$emailSafe}'>{$emailSafe}</a></td></tr>
  <tr><td style='color:#64748b;vertical-align:top'>Nachricht</td><td>{$messageSafe}</td></tr>
</table>
";

$payload = json_encode([
    'From'          => MAIL_FROM_NAME . ' <' . MAIL_FROM . '>',
    'To'            => MAIL_TO,
    'ReplyTo'       => $name . ' <' . $email . '>',
    'Subject'       => 'Kontaktanfrage von ' . $name,
    'HtmlBody'      => $html,
    'MessageStream' => 'outbound',
]);

$ch = curl_init('https://api.postmarkapp.com/email');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Accept: application/json',
    'Content-Type: application/json',
    'X-Postmark-Server-Token: ' . POSTMARK_TOKEN,
]);

$response   = curl_exec($ch);
$curlError  = curl_error($ch);
$statusCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($curlError !== '' || $statusCode < 200 || $statusCode >= 300) {
    error_log('[verein-contact] Postmark failed: HTTP ' . $statusCode . ' curl="' . $curlError . '" resp=' . (string) $response);
    http_response_code(500);
    echo json_encode(['error' => 'Mail delivery failed']);
    exit;
}

http_response_code(200);
echo json_encode(['success' => true]);
