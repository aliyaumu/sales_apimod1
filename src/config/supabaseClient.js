import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const subkey = process.env.SUPABASE_KEY || "sb_publishable_Ojw3qiopsSXfehVNUOEt1A_10n84OOZ";

export const supabase = createClient(supabaseUrl, subkey);

