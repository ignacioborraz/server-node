import fs from "fs";
import crypto from "crypto";

class NotesManager {
  constructor() {
    this.path = "./src/data/fs/files/notes.json";
    this.init();
  }
  init() {
    try {
      const exists = fs.existsSync(this.path);
      // console.log(exists);
      if (!exists) {
        const data = JSON.stringify([], null, 2);
        fs.writeFileSync(this.path, data);
      }
      //console.log("FILE READY");
    } catch (error) {
      throw error;
    }
  }
  async create(data) {
    try {
      if (!data.text) {
        throw new Error("INGRESE TEXTO EN LA NOTA");
      }
      const note = {
        id: crypto.randomBytes(12).toString("hex"),
        type: data.type || "to do",
        text: data.text,
        date: data.date || new Date(),
      };
      const notes = await fs.promises.readFile(this.path, "utf-8");
      const parseNotes = JSON.parse(notes);
      parseNotes.push(note);
      const stringNotes = JSON.stringify(parseNotes, null, 2);
      await fs.promises.writeFile(this.path, stringNotes);
      return note;
    } catch (error) {
      console.log(error);
    }
  }
  async read() {
    try {
      const notes = await fs.promises.readFile(this.path, "utf-8");
      const parseNotes = JSON.parse(notes);
      if (parseNotes.length === 0) {
        const error = new Error("Not found!");
        error.statusCode = 404;
        throw error;
      }
      return parseNotes;
    } catch (error) {
      throw error;
    }
  }
  async readOne(id) {
    try {
      const notes = await fs.promises.readFile(this.path, "utf-8");
      const parseNotes = JSON.parse(notes);
      const found = parseNotes.find((each) => each.id === id);
      if (!found) {
        const error = new Error("Not found!");
        error.statusCode = 404;
        throw error;
      }
      return found;
    } catch (error) {
      throw error;
    }
  }
  async destroy(id) {
    try {
      const notes = await fs.promises.readFile(this.path, "utf-8");
      const parseNotes = JSON.parse(notes);
      const found = parseNotes.find((each) => each.id === id);
      if (!found) {
        const error = new Error("Not found!");
        error.statusCode = 404;
        throw error;
      }
      const filtered = parseNotes.filter((each) => each.id !== id);
      const stringNotes = JSON.stringify(filtered, null, 2);
      await fs.promises.writeFile(this.path, stringNotes);
      return found;
    } catch (error) {
      throw error;
    }
  }
}

async function test() {
  try {
    const notes = new NotesManager();
    console.log(await notes.create({ text: "done" }));
    console.log(await notes.read());
    console.log(await notes.destroy("d77a869994449f79297f0f81"));
  } catch (error) {
    console.log(error);
  }
}
test();
