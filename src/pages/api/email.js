import nodemailer from 'nodemailer';

export const handler = async (event, context) => {
    // Check if method is POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method not allowed' })
        }
    }

    try {
        console.log('Received email request')
        const formData = JSON.parse(event.body)
        console.log('Form data:', formData)
        
        await sendEmailWithNodemailer(formData)
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Request received successfully' })
        }
    } catch (error) {
        console.error('Error processing request:', error)
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal server error' })
        }
    }
}

async function sendEmailWithNodemailer(formData) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'carigaar@gmail.com',
            pass: 'urfq wuyw hamb wuok'
        }
    });

    const mailOptions = {
        from: 'Carigaar <carigaar@gmail.com>',
        to: 'carigaar@gmail.com',
        subject: 'New Form Submission from Website',
        html: `
            <h2>New Form Submission</h2>
            <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
                <h3>Form Details:</h3>
                <pre style="background-color: white; padding: 15px; border-radius: 5px;">
                    ${Object.entries(formData)
                        .map(([key, value]) => `<b>${key}:</b> ${value}`)
                        .join('<br>')}
                </pre>
                <p style="color: #666;">Submitted at: ${new Date().toLocaleString()}</p>
            </div>
        `,
        text: JSON.stringify(formData, null, 2)
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}