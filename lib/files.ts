import { supabase } from './supabase';

export async function insertFile({ id, name, size, type, uploaded_at }: {
  id: string;
  name: string;
  size: number;
  type: string;
  uploaded_at: string;
}) {
  const { data, error } = await supabase
    .from('files')
    .insert([{ id, name, size, type, uploaded_at }]);
  if (error) throw error;
  return data;
}

export async function getFiles() {
  const { data, error } = await supabase
    .from('files')
    .select('*')
    .order('uploaded_at', { ascending: false });
  if (error) throw error;
  return data;
}
