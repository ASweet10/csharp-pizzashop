using MailKit.Net.Smtp;
using MimeKit;

namespace PizzaApi.Services
{
    public class EmailService
    {
        private readonly IConfiguration _config;
        public EmailService(IConfiguration config)
        {
            _config = config;
        }
        public void SendOrderConfirmation(string toEmail, string body)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Tony's Pizza Shop", "Tony_Boloneys123@gmail.com"));
            message.To.Add(MailboxAddress.Parse(toEmail));
            message.Subject = "Order Confirmation";

            message.Body = new TextPart("plain") { Text = body };

            using (var client = new SmtpClient())
            {
                client.Connect("sandbox.smtp.mailtrap.io", 587, false);
                client.Authenticate("cf9e11650e6a8b", "4fb5e0e1eb32e2");
                client.Send(message);
                client.Disconnect(true);
            }
        }
    }
}