export interface Course
{
  id?: number;
  name: string;
  teacher: string;
  class_duration: number;
  number_classes: number;
  createdAt?: Date;
  count_inscriptions?: number;
}
