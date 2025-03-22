export function ReminderForm({ onAddReminder }) {
    async function addReminder(formData) {
        console.log(formData);
        onAddReminder(Object.fromEntries(formData));
    }

    return (
        <div className="flex justify-center mt-8 mb-8">
            <form 
                action={addReminder} 
                className="bg-[#D0B8A8] p-6 rounded-lg shadow-md w-full max-w-lg"
            >
                <h2 className="text-xl font-semibold text-center mb-4">Add a Reminder</h2>

                <div className="mb-4">
                    <label htmlFor="reminder_title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input 
                        type="text" 
                        name="reminder_title" 
                        id="reminder_title" 
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                        required 
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="reminder_details" className="block text-sm font-medium text-gray-700">Details</label>
                    <input 
                        type="text" 
                        name="reminder_details" 
                        id="reminder_details" 
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                        required 
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="reminder_due_date" className="block text-sm font-medium text-gray-700">Due Date</label>
                    <input 
                        type="date" 
                        name="reminder_due_date" 
                        id="reminder_due_date" 
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                        required 
                    />
                </div>

                <button 
                    className="w-full bg-[#C5705D] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#a45a4a] transition"
                >
                    Add Reminder
                </button>
            </form>
        </div>
    );
}
