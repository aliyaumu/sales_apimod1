import { supabase } from "../config/supabaseClient.js";

export const LoanModel = {
  async getAll(status) {
    let query = supabase.from("loans").select("*");
    
    // Fitur filter query, misal: ?status=Terlambat
    if (status) {
      query = query.eq("status", status);
    }
    
    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase
      .from("loans")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(loanData) {
    const { data, error } = await supabase
      .from("loans")
      .insert([loanData])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id, loanData) {
    const { data, error } = await supabase
      .from("loans")
      .update(loanData)
      .eq("id", id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async remove(id) {
    const { error } = await supabase.from("loans").delete().eq("id", id);
    if (error) throw error;
    return { message: "Data peminjaman berhasil dihapus" };
  },
};
