import dayjs from 'dayjs';
import { useState } from 'react';
import {
  IconBike,
  IconChevronDown,
  IconChevronUp,
  IconRun,
  IconSwimming,
} from '@tabler/icons-react';
import { Group, Paper, Text, UnstyledButton } from '@mantine/core';
import './MantineDev.css';

const data = [
  { icon: IconRun, label: 'Running' },
  { icon: IconSwimming, label: 'Swimming' },
  { icon: IconBike, label: 'Bike' },
];

function MantineDev() {
  const [date, setDate] = useState(new Date(2021, 9, 24));

  const stats = data.map((stat) => {
    // Use normal JS expression (same logic as before)
    const distance = Math.floor(Math.random() * 6 + 4);

    return (
      <Paper className="stat" radius="md" shadow="md" p="xs" key={stat.label}>
        <stat.icon size={32} className="icon" stroke={1.5} />
        <div>
          <Text className="label">{stat.label}</Text>
          <Text fz="xs" className="count">
            <span className="value">{distance}km</span> / 10km
          </Text>
        </div>
      </Paper>
    );
  });

  return (
    <div className="root">
      <div className="controls">
        <UnstyledButton
          className="control"
          onClick={() => setDate((current) => dayjs(current).add(1, 'day').toDate())}
        >
          <IconChevronUp size={16} className="controlIcon" stroke={1.5} />
        </UnstyledButton>

        <div className="date">
          <Text className="day">{dayjs(date).format('DD')}</Text>
          <Text className="month">{dayjs(date).format('MMMM')}</Text>
        </div>

        <UnstyledButton
          className="control"
          onClick={() => setDate((current) => dayjs(current).subtract(1, 'day').toDate())}
        >
          <IconChevronDown size={16} className="controlIcon" stroke={1.5} />
        </UnstyledButton>
      </div>

      <Group style={{ flex: 1 }}>{stats}</Group>
    </div>
  );
}

export default MantineDev;
