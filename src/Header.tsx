import github from "./assets/github.png";

export default function Header() {
  return (
    <header>
      <div className="gutters">
        <h1>Cruisey Movie: Monday</h1>
        <a href="https://github.com/richardverheyen/cruisey-movie-monday">
          <img src={github} alt="github link" />
        </a>
      </div>
    </header>
  );
}
