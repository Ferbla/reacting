"use client";

import { ReminderForm } from "./components/ReminderForm";
import { ReminderList } from "./components/ReminderList";
import { useState } from 'react';

export default function Home() {
  const [reminders, addReminder] = useState([]);

  const handleAddReminder = (newReminder) => {
    addReminder([...reminders, newReminder]);
  }

  return (
    <div>
      <ReminderForm onAddReminder={handleAddReminder}/>

      <ReminderList reminders={reminders} />
    </div>

  );
}
