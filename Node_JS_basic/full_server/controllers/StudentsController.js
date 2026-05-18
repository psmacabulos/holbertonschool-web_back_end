import readDatabase from '../utils';

class StudentsController {
    static getAllStudents(req, res) {
        // Read the database path at request time so tests can stub process.argv.
        const database = process.argv[2];

        readDatabase(database)
            .then((students) => {
                let output = 'This is the list of our students';

                // Keep field sections in case-insensitive alphabetical order.
                const sortedFields = Object.keys(students)
                    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

                for (const field of sortedFields) {
                    const names = students[field];
                    output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
                }

                res.status(200).send(output);
            })
            .catch(() => {
                res.status(500).send('Cannot load the database');
            });
    }

    static getAllStudentsByMajor(req, res) {
        const { major } = req.params;

        // Only CS and SWE are supported majors.
        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        const database = process.argv[2];

        readDatabase(database)
            .then((students) => {
                const names = students[major] || [];
                res.status(200).send(`List: ${names.join(', ')}`);
            })
            .catch(() => {
                res.status(500).send('Cannot load the database');
            });
    }
}

export default StudentsController;