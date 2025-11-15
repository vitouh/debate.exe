require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.OPENAI_API_KEY
}));

app.post('/debate', async (req, res) => {
    const userText = req.body.argument;

    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are a skilled debater. Always respond with logical, persuasive counterarguments." },
                { role: "user", content: userText }
            ],
            max_tokens: 200
        });

        res.json({ reply: completion.data.choices[0].message.content });
    } catch (err) {
        console.error(err);
        res.status(500).json({ reply: "sorry, something went wrong." });
    }
});

app.listen(3000, () => console.log('Bot backend running on port 3000'));
