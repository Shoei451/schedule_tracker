// ============================================================
// CONFIG
// ============================================================
const { createClient } = supabase;
const db = createClient(
  'https://abfuanjincelcyrlswsp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiZnVhbmppbmNlbGN5cmxzd3NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4NjE4MDIsImV4cCI6MjA4MzQzNzgwMn0.OD7371E7A1ZRiqF6SGXnp2JSzPowg2zTt-V36GQ7x9A'
);

const TABLE        = 'weekly_schedule';
const DAYS         = ['日','月','火','水','木','金','土'];
const WEEKDAY_NAMES= ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'];
const COLORS       = ['#6d28d9','#2563eb','#059669','#d97706','#dc2626','#0891b2','#be185d','#4b5563'];
