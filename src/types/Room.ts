export type Room = {
  id: number;
  name: string;
  description: string;
  creationTime: string;
  tags: string[];
  maximumVisitors: number;
  showOwnerName: boolean;
  ownerName: string;
  ownerUniqueId: string;
  categories: string[];
  thumbnailUrl: string;
  imageUrl: string;
  rating: number;
  uniqueId: string;
};