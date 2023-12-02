import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const lst = [];
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);
  lst.push(room1);
  lst.push(room2);
  lst.push(room3);
  return lst;
}
