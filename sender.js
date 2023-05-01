const amqp = require("amqplib");

const queue = "demo";
const queue2 = "demo2";
const queue3 = "queue3";
const axios = require("axios");

var connection;

// Kết nối RabbitMQ
async function connectRabbitMQ() {
  try {
    connection = await amqp.connect("amqp://localhost");
    console.info("connect to RabbitMQ success");

    const channel = await connection.createChannel();

    return channel;


  }
  catch (err) {
    console.error(err);
    setTimeout(connectRabbitMQ, 10000);
  }
}

async function test(count) {
  let channel = await connectRabbitMQ();
  let i = count;
  setInterval(async () => {
    let a = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

    a.data.userId = i++;
    await channel.sendToQueue(queue, Buffer.from(JSON.stringify(a.data)));
  }, 5000);
}

async function test2(count) {
  let channel = await connectRabbitMQ();
  let i = count;
  setInterval(async () => {
    let b = "ABC" + i++
    await channel.sendToQueue(queue2, Buffer.from(b));
  }, 5000);
}

test(999)
test2(1234)