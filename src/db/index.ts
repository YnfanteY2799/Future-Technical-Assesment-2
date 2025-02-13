const memoryEntities: Array<unknown> = [
  {
    entity_id: "light.virtual_light_1",
    client_id: "client_1",
    type: "light",
    data: {
      state: "on",
      attributes: {
        brightness: 150,
        friendly_name: "Virtual Light 1",
      },
    },
    last_updated: "2023-10-01T12:00:00Z",
    last_reported: "2023-10-01T12:00:00Z",
    last_changed: "2023-10-01T12:00:00Z",
  },
  {
    entity_id: "sensor.temperature_sensor_1",
    client_id: "client_2",
    type: "sensor",
    data: {
      state: "22.5",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Temperature Sensor 1",
      },
    },
    last_updated: "2023-10-01T12:00:00Z",
    last_reported: "2023-10-01T12:00:00Z",
    last_changed: "2023-10-01T12:00:00Z",
  },
];
