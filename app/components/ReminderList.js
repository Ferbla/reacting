import { useEffect } from "react";

export function ReminderList({ reminders = [] }) {
    useEffect(() => {
        console.log("Updated Reminders:", reminders);
    }, [reminders]);

    return (
        <div className="Reminders rounded-xl p-4">
            <h2 className="m-4 text-4xl font-bold">Reminders:</h2>
            <hr className="mb-4" />
            {reminders.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 l:grid-cols-3 gap-4 mx-auto max-w-4xl">       

                {reminders.map((reminder, index) => (
                    <div key={index} className="Reminders-item flex items-center gap-x-4 rounded-xl p-6 shadow-lg outline ">
                        <h3>{reminder.reminder_title} | {reminder.reminder_due_date}</h3>
                        <hr />

                        {reminder.reminder_details}
                    </div>
                    ))}

                </div>
            ) : (
                <p className="text-3l text-center">No reminders yet. Feel free to add one</p>
            )}

        </div>
    );
}