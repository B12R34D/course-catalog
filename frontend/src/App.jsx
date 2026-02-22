import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("/api/courses")
      .then(res => setCourses(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎓 Course Catalog</h1>
      <p style={styles.subtitle}>Explore our available courses</p>

      <div style={styles.grid}>
        {courses.map(course => (
          <div key={course.id} style={styles.card}>
            <h2 style={styles.cardTitle}>{course.title}</h2>
            <p><strong>Topic:</strong> {course.topic?.name}</p>
            <p><strong>Language:</strong> {course.language?.name}</p>
            <p>{course.description}</p>
            <p style={styles.price}>${Number(course.price).toFixed(2)}</p>
            <span style={styles.level}>{course.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "50px",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "white",
    fontFamily: "Segoe UI, sans-serif"
  },
  title: {
    fontSize: "40px",
    marginBottom: "10px"
  },
  subtitle: {
    marginBottom: "40px",
    opacity: 0.8
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px"
  },
  card: {
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
    transition: "0.3s ease"
  },
  cardTitle: {
    marginBottom: "15px"
  },
  price: {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "10px",
    color: "#00ffcc"
  },
  level: {
    display: "inline-block",
    marginTop: "10px",
    padding: "5px 12px",
    borderRadius: "20px",
    background: "#ff00cc",
    fontSize: "12px"
  }
};

export default App;