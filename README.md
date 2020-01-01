# eng2il - english to ilonggo translator

eng2il is a jupyter microservice and nodejs speech-to-text converter (using wav files)


### Tech

eng2il uses a number of open source projects to work properly:

* [nodejs](https://nodejs.org/)
* [jupyter kernel gateway](https://towardsdatascience.com/expose-endpoints-using-jupyter-kernel-gateway-e55951b0f5ad)
* [Google Speech-to-text API](https://cloud.google.com/speech-to-text/docs/reference/rest/?apix=true)

### Installation

Install the dependencies and start the nodejs app.

```sh
$  export GOOGLE_APPLICATION_CREDENTIALS= <Google API Speech-to-text json file credentials 
$ cd eng2il
$ npm install
$ node main.js
```
start jupyter kernel gateway
```sh
$ jupyter kernelgateway --api='kernel_gateway.notebook_http' --seed_uri='ilonggo_nmt_with_attention.ipynb' --port 9090
```



