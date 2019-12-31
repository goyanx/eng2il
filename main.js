// Imports the Google Cloud client library
const speech = require('@google-cloud/speech');
const fs = require('fs');
const http = require('http');

// Your Google Cloud Platform project ID
const projectId = <project id>;

// Creates a client
const client = new speech.SpeechClient({
  projectId: projectId,
});

// The name of the audio file to transcribe
const fileName = './HowMuch.wav';

// Reads a local audio file and converts it to base64
const file = fs.readFileSync(fileName);
const audioBytes = file.toString('base64');

// The audio file's encoding, sample rate in hertz, and BCP-47 language code
const audio = {
  content: audioBytes,
};
const config = {
  encoding: 'LINEAR16',
  //sampleRateHertz: 16000,
  languageCode: 'en-US',
};
const request = {
  audio: audio,
  config: config,
};

// Detects speech in the audio file
client
  .recognize(request)
  .then(data => {
    const response = data[0];
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');
    str = encodeURIComponent(transcription)//.replace(/\s/N/);
    console.log(`Transcription: ${transcription}`);
    console.log(`str ${str}`)
    http.get('http://127.0.0.1:9090/translate?ph=' + str, (resp) => {
      let data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        console.log(data);
      });

    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
  })
  .catch(err => {
    console.error('ERROR:', err);
  });


