import { Command } from "commander";

const args = new Command(); //inicializamos los comandos

args
  .option("-p <port>", "port", 8080)
  .option("--mode <mode>", "environment", "prod")

args.parse(); //para cerrar la configuración de comandos

export default args.opts(); //para exportar los argumentos CLI
