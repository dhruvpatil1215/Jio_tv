export default (req, res) => {
  // Replace with your Telegram link
  const telegramUrl = 'https://t.me/tcopsdiscuss';

  // Redirect the user to the Telegram page
  res.writeHead(302, { Location: telegramUrl });
  res.end
