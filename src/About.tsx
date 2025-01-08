// About.jsx
import './App.css';
import Image from "./assets/negr.jpg"

function About() {
    return (
        <div className="flex flex-col about bg-gray-100 p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
            <h1 className="text-3xl font-bold text-center text-orange-400 mb-4">Leonhard Euler</h1>
            <img alt="Leonhard Euler" src={Image} className="rounded-lg size-1/3 self-center" />
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Leonhard Euler (1707–1783) was a Swiss mathematician, physicist, astronomer, logician, and engineer. He
                is one of the most influential mathematicians in history and considered the greatest mathematician of
                the 18th century.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Contributions</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
                <li>
                    <strong className="text-orange-400">Mathematics:</strong> Laid the foundations of modern analysis,
                    number theory, and graph theory. Introduced key symbols such as π (pi), e, and i.
                </li>
                <li>
                    <strong className="text-orange-400">Physics:</strong> Made significant contributions to mechanics,
                    hydrodynamics, and optics.
                </li>
                <li>
                    <strong className="text-orange-400">Graph Theory:</strong> Solved the problem of the seven bridges of
                    Königsberg, leading to the creation of the field of graph theory.
                </li>
                <li>
                    <strong className="text-orange-400">Publications:</strong> Authored more than 850 scientific works.
                </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Legacy</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
                Despite losing his sight in later years, Euler remained remarkably productive thanks to his phenomenal
                memory. His work has influenced numerous fields of science and technology.
            </p>
        </div>

    );
}

export default About;
