# 💭 Moodify  

**Moodify** is a simple yet powerful app designed to help you understand your emotions and track your emotional journey with ease.  
It’s your personal space to log how you feel each day — happy, sad, stressed, or anything in between — along with a short note and timestamp.  
Later, Moodify analyzes this data to show your emotional patterns, fun stats, and how your moods change over time.  

I’m **Esraa Syam**, and I built this project to help people discover themselves through emotional awareness.  
It’s not just a data storage app — it’s a reminder to take care of yourself and pay attention to how you feel. 💜  

---

## 💡 Project Idea  

I started **Moodify** to make something that helps people understand their emotions on a deeper level.  
Each day, you log your mood with an optional note, and the app stores it with the date and time.  
After a while, you can look back and see your **mood distribution** (how often you felt happy, sad, etc.),  
**patterns** (like feeling a certain way on specific days), and even your **streaks** — the number of consecutive days you logged your mood.  

The project is still under development, but I’m focusing a lot on building a strong, well-structured backend that’s ready to scale.  
This isn’t just another CRUD app — it’s built with real **backend engineering** principles, clean architecture, and performance optimization in mind.  

---

## ⚙️ Tech Stack

- **Backend:** NestJS (TypeScript)  
- **Database:** PostgreSQL  
- **ORM:** TypeORM  
- **Containerization:** Docker  
- **Architecture:** Modular with feature-based structure  
- **Naming Convention:** Snake Case via `SnakeNamingStrategy`  

---

## 🧠 Database Optimization

I focused heavily on database optimization to make queries faster and more efficient.  
Here’s what I did:

- Created a **composite index** on `user_id` and `created_at` in the `mood_logs` table to improve query performance for analytics and filtering.  
- Used **migrations** to ensure reproducible and version-controlled database changes.  
- Structured entities and relationships carefully for scalability.  

Even though the project is still under development, these optimizations show real backend engineering effort — not just CRUD operations.

---

## 🚀 How to Run the Project

If you’d like to try it locally:

1. **Clone the repository:**
   ```bash
   git clone git@github.com:EsraaSyam/Moodify.git
   cd Moodify
   ```

2. **Set up environment variables:**  
   Create a `.env` file in the project root and add:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=your_password
   DB_NAME=moodify

   SECRET_KEY=your_secret_key
   SALT_ROUNDS=10
   ```

3. **Start Docker containers:**
   ```bash
   docker-compose up -d
   ```

4. **Run migrations:**
   ```bash
   npm run migration:run
   ```

5. **Start the app:**
   ```bash
   npm run start:dev
   ```

---

## 📊 Upcoming Features

- **User Dashboard:** interactive charts and insights for each user’s mood history  
- **Mood Streak Tracker:** number of consecutive days logged
- **Custom Moods:** users will be able to create their own moods (private and visible only to them)  

---

## 💫 A Few Words from Me  

For me, **Moodify** isn’t just a project — it’s a reflection of my passion for backend development.  
I’m trying to build something meaningful while also challenging myself to design a strong and well-structured system.  
Right now, I’m working on the analytics dashboard, and I’m super excited to see how users will interact with it.

If you have any questions, ideas, or even just want to chat about development — I’m here!

---

## 🤝 Contributing & Discussions  

Anyone who wants to contribute or share new ideas is more than welcome 💜 

- Got a feature idea or found a bug? → Open an **Issue** on GitHub.  
- Want to contribute code? → **Fork** the repo and submit a **Pull Request** with your changes.  
- Just want to talk about the project? → Start a **Discussion**, and I’ll be there!  

## 🪪 License  

This project is licensed under the **MIT License**.  
© 2025 **Esraa Syam**. All rights reserved.  
