export interface Student{
    id?: number;
    created_at?: Date,
    first_name: string,
    last_name: string,
    document_number: number,
}


export interface StudentInscription{
  id?: number;
  created_at?: Date;
  student_id: number;
  course_id: number;
  course?: string;
}

export interface Inscriptions{
  id?: number;
  created_at?: Date;
  student_id: number;
  course_id: number;
}
