const axios = require ('axios');
const token = 'FBx825FppkdG67ucP-NhhJyoQLmWuo7w_gSnNnNDrHlV';
const basicAuth = 'YXBpa2V5OkZCeDgyNUZwcGtkRzY3dWNQLU5oaEp5b1FMbVd1bzd3X2dTbk5uTkRySGxW'; 

(async () => {
    const request = {
        method: 'get',
        url: 'https://api.us-south.assistant.watson.cloud.ibm.com/instances/bb587891-2ef1-4355-95bb-e1d61ee02cf0/v1/workspaces?version=2021-11-27',
        headers: { 
            'Accept': '*/*', 
            'Authorization': `Basic ${basicAuth}`,
            'Content-Type': 'application/json'
        },
        auth: {
            username: 'apikey',
            password: token
        }
    }
    const resposta = await axios(request)
    console.log('Status code de resposta ', resposta.status)
    console.log('Dados da resposta ', resposta.data)
    for(let item of resposta.data.workspaces){
        console.log(`Nome do workspace: ${item.name}\nDescricao do workspace: ${item.description}\n---------\n`)
    }
})()