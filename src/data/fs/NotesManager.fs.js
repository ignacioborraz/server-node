import fs from "fs";
import crypto from "crypto";

class NotesManager {
  constructor() {
    this.path = "./src/data/fs/files/notes.json";
    this.init();
  }
  init() {
    const exists = fs.existsSync(this.path);
    if (!exists) {
      const stringData = JSON.stringify([], null, 2);
      fs.writeFileSync(this.path, stringData);
    }
  }
  async create(data) {
    try {
      if (!data.text) {
        throw new Error("INGRESE TEXT");
      } else {
        const one = {
          id: crypto.randomBytes(12).toString("hex"),
          text: data.text,
          category: data.category || "to do",
          date: data.date || new Date(),
        };
        let all = await this.read();
        all.push(one);
        all = JSON.stringify(all, null, 2);
        await fs.promises.writeFile(this.path, all);
        return one;
      }
    } catch (error) {
      throw error;
    }
  }
  async read(cat) {
    try {
      let all = await fs.promises.readFile(this.path, "utf-8");
      all = JSON.parse(all);
      cat && (all = all.filter((each) => each.category === cat));
      return all;
    } catch (error) {
      throw error;
    }
  }
  async readOne(id) {
    try {
      let all = await this.read();
      let one = all.find((each) => each.id === id);
      return one;
    } catch (error) {
      throw error;
    }
  }
  async update(id, data) {
    try {
      let all = await this.read();
      let one = all.find((each) => each.id === id);
      if (one) {
        for (let prop in data) {
          one[prop] = data[prop];
        }
        all = JSON.stringify(all, null, 2);
        await fs.promises.writeFile(this.path, all);
        return one;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
  async destroy(id) {
    try {
      let all = await this.read();
      let one = all.find((each) => each.id === id);
      if (one) {
        all = all.filter((each) => each.id !== id);
        all = JSON.stringify(all, null, 2);
        await fs.promises.writeFile(this.path, all);
        return one;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

const notesManager = new NotesManager();
export default notesManager;
