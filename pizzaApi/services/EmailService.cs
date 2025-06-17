using MailKit.Net.Smtp;
using MimeKit;

public class EmailService
{
    public void SendOrderConfirmation(string toEmail, string body)
    {
        var message = new MimeMessage();
        message.From.Add(new MailboxAddress("Pizza Shop", "your_email@gmail.com"));
        message.To.Add(MailboxAddress.Parse(toEmail));
        message.Subject = "Order Confirmation";

        message.Body = new TextPart("plain") { Text = body };

        using var client = new SmtpClient();
        client.Connect("smtp.gmail.com", 587, false);
        client.Authenticate("your_email@gmail.com", "app_password");
        client.Send(message);
        client.Disconnect(true);
    }
}
