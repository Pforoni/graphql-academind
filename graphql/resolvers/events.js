const Event = require('../../models/event');
const {transformEvent} = require('./merge');

module.exports = {
    events: async () => {
        try {
            const events = await Event.find()
            return events.map(event => {
                return transformEvent(event);
            })
        }
        catch (err) {
            throw err;
        };
    },
    
    createEvent: async (args) => {
        const event = new Event({
            title: args.eventInput.title,
            description: args.eventInput.description,
            price: +args.eventInput.price,
            date: dateToString(args.eventInput.date),
            creator: '5d2e86f50b729849940740a9'
        });
        let createdEvent;
        try {
            const result = await event
                .save()
            createdEvent = transformEvent(result);
            const creator = await User.findById('5d2e86f50b729849940740a9')

            if (!creator) {
                throw new Error('User not found.');
            }
            creator.createdEvents.push(event);
            const userSaveResult = await creator.save();

            return createdEvent;
        }
        catch (err) {
            console.log(err);
            throw err;
        };
    },
    
};