import fs from "fs";
import crypto from "crypto";

class NotesManager {
  static #notes = [];
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
        NotesManager.#notes.push(one);
        return one;
      }
    } catch (error) {
      throw error;
    }
  }
  async read(cat) {
    try {
      let filtered = [...NotesManager.#notes];
      cat && (filtered = filtered.filter((each) => each.category === cat));
      return filtered;
    } catch (error) {
      throw error;
    }
  }
  async readOne(id) {
    try {
      let one = NotesManager.#notes.find((each) => each.id === id);
      return one;
    } catch (error) {
      throw error;
    }
  }
  async update(id, data) {
    try {
      if (one) {
        const one = this.readOne(id);
        for (let prop in data) {
          one[prop] = data[prop];
        }
        return one;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
  async destroy(id) {
    try {
      const one = this.readOne(id);
      if (one) {
        NotesManager.#notes = NotesManager.#notes.filter(
          (each) => each.id !== id
        );
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
