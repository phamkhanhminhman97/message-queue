const amqp = require("amqplib");

const queue = "demo";
const queue2 = "demo2";
const queue3 = "queue3";


var connection;

//  Connect RabbitMQ
async function consumer() {
  try {
    connection = await amqp.connect("amqp://localhost");
    console.info("receiver connect to RabbitMQ success");

    const channel = await connection.createChannel();
    await channel.assertQueue(queue);
    await channel.consume(queue, async function (message) {
      console.log('==============');
      console.log(JSON.parse(message.content.toString()));
      channel.ack(message);
    });



    connection.on("error", function (err) {
      console.log(err);
      setTimeout(connectRabbitMQ, 10000);
    });

    connection.on("close", function () {
      console.error("connection to RabbitQM closed!");
      setTimeout(connectRabbitMQ, 10000);
    });

  }
  catch (err) {
    console.error(err);
    setTimeout(connectRabbitMQ, 10000);
  }
}

async function consumer2() {
  try {
    connection = await amqp.connect("amqp://localhost");
    console.info("receiver connect to RabbitMQ success");

    const channel = await connection.createChannel();
    await channel.assertQueue(queue2);
    await channel.consume(queue2, async function (message) {
      console.log('********************');
      console.log(message.content.toString());
      channel.ack(message);
    });



    connection.on("error", function (err) {
      console.log(err);
      setTimeout(connectRabbitMQ, 10000);
    });

    connection.on("close", function () {
      console.error("connection to RabbitQM closed!");
      setTimeout(connectRabbitMQ, 10000);
    });

  }
  catch (err) {
    console.error(err);
    setTimeout(connectRabbitMQ, 10000);
  }
}
consumer();
consumer2()