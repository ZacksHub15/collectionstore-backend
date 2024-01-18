const Lessons = require('../models/lessons_model.js')

const LessonsController = {
    addLessons: async (req, res) => {
        try {
            const { subject, location, price, space, image, id } = req.body;
            let lessons = new Lessons({ subject, location, price, space, image, id });
            lessonsData = await lessons.save();
            res.status(200).json(lessonsData);;
        } catch (error) {
            res.status(500).json({ error: error });
        }
    },

    getAllLessons: async (req, res) => {
        try {
            const lessons = await Lessons.find();
            res.status(200).json(lessons);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    },

    updateAvailableSpace: async (req, res) => {
        try {
            const lessonId = req.params.id;
            const { orderedSpace } = req.body;

            const lesson = await Lessons.findById(lessonId);
            if (!lesson) {
                return res.status(404).json({ error: 'Lesson not found' });
            }

            const currentAvailableSpace = parseInt(lesson.space);
            const updatedAvailableSpace = currentAvailableSpace - orderedSpace;

            if (updatedAvailableSpace < 0) {
                return res.status(400).json({ error: 'Not enough available space' });
            }

            lesson.space = updatedAvailableSpace.toString();
            await lesson.save();

            res.status(200).json({ message: 'Available space updated successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    ,

    searchLessons: async (req, res) => {
        try {
            const searchTerm = req.query.q;
            const regex = new RegExp(searchTerm, 'i');

            const searchResults = await Lessons.findOne({
                $or: [
                    { subject: { $regex: regex } },
                    { location: { $regex: regex } },
                ],
            });

            res.status(200).json(searchResults);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },




};


module.exports = LessonsController;