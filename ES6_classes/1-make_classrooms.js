import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  const classRoomObjects = [];

  for (const size of sizes) {
    classRoomObjects.push(new ClassRoom(size));
  }
  return classRoomObjects;
}
