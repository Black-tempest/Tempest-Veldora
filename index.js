require('dotenv').config();
const express = require('express');
const request = require('request');

const app = express();
app.use(express.json());

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

app.get('/webhook', (req, res) => {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        console.log('Webhook vérifié');
        res.status(200).send(challenge);
    } else {
        res.sendStatus(403);
    }
});

app.post('/webhook', (req, res) => {
    const body = req.body;

    if (body.object === 'page') {
        body.entry.forEach(entry => {
            entry.messaging.forEach(event => {
                if (event.message && event.message.text) {
                    const senderId = event.sender.id;
                    const messageText = event.message.text;
                    repondre(senderId, messageText);
                }
            });
        });
        res.status(200).send('EVENT_RECEIVED');
    } else {
        res.sendStatus(404);
    }
});

function repondre(senderId, messageRecu) {
    let reponse = `🖤 Dark-Angel a reçu : "${messageRecu}"`;

    const msgLower = messageRecu.toLowerCase();
    if (msgLower.includes('bonjour') || msgLower.includes('salut')) {
        reponse = 'Salut, je suis Dark-Angel, ton bot personnel.';
    } else if (msgLower.includes('qui es-tu')) {
        reponse = 'Je suis Dark-Angel, créé par Samy Gundo.';
    } else if (msgLower.includes('image')) {
        envoyerImage(senderId, 'https://i.ibb.co/4RDvYCFD/0f1b68af3f58.jpg');
        return;
    }

    envoyerMessage(senderId, reponse);
}

function envoyerMessage(senderId, texte) {
    request({
        url: 'https://graph.facebook.com/v18.0/me/messages',
        qs: { access_token: PAGE_ACCESS_TOKEN },
        method: 'POST',
        json: {
            recipient: { id: senderId },
            message: { text: texte }
        }
    }, (error, response, body) => {
        if (error) console.error('Erreur envoi:', error);
        else if (response.statusCode !== 200) console.error('Erreur API:', body);
    });
}

function envoyerImage(senderId, imageUrl) {
    request({
        url: 'https://graph.facebook.com/v18.0/me/messages',
        qs: { access_token: PAGE_ACCESS_TOKEN },
        method: 'POST',
        json: {
            recipient: { id: senderId },
            message: {
                attachment: {
                    type: 'image',
                    payload: { url: imageUrl, is_reusable: true }
                }
            }
        }
    }, (error, response, body) => {
        if (error) console.error('Erreur envoi image:', error);
        else if (response.statusCode !== 200) console.error('Erreur API image:', body);
    });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Dark-Angel écoute sur le port ${PORT}`));￼Enter
