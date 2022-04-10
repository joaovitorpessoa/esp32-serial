import { SerialPort } from "serialport";

const serialPort = new SerialPort(
  {
    path: process.env.usb_port as string,
    baudRate: parseInt(process.env.baud_rate as string),
  },
  (err) => {
    if (err) return console.log("Error: ", err.message);
  }
);

serialPort.on("data", (data: Buffer) => {
  process.stdout.write(data);

