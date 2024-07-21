const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "®Disindu🇱🇰";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94775704025";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_25_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDg5LFxuICAgICAgICAzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU0LFxuICAgICAgICA0LFxuICAgICAgICA0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDUzLFxuICAgICAgICA2NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTMsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk4LFxuICAgICAgICAzMyxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgODQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjExLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODksXG4gICAgICAgIDIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MyxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDU4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDcsXG4gICAgICAgIDgyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDk3LFxuICAgICAgICA3NCxcbiAgICAgICAgNzksXG4gICAgICAgIDU2LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NixcbiAgICAgICAgMTY5LFxuICAgICAgICA1NixcbiAgICAgICAgMjMzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNixcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDkyLFxuICAgICAgICA0NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMixcbiAgICAgICAgODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiakk1RTI0VUZveW04WFMyYVVWMzFuWURqQVhIaUdJS1Q2OExWdVRaejRVYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc3NTcwNDAyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDY3QTAwMUU1NzBCQkE1RURCOUEyQTg2MzdGMUExQjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDkyNzEyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NzU3MDQwMjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNERTZDRDc4N0FCQUVFOEVGMjhEMzE4N0ZDQ0FCMTdFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQ5MjcxMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzc1NzA0MDI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDQzE0NkQ0RDcyMTVEM0MxMzFDNjE1MDVDOEQyN0RGMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0OTI3MThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWVdxazF1VkNTa3lWbmJJN3lGOThnZ1wiLFxuICBcInBob25lSWRcIjogXCJjNjA1MmFiZi05ZDVjLTQ2YWItYWJmMC02OTMzYWVhYTlhYTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI3LFxuICAgICAgNjgsXG4gICAgICAyNDQsXG4gICAgICAyLFxuICAgICAgODMsXG4gICAgICA3OSxcbiAgICAgIDgwLFxuICAgICAgMjIyLFxuICAgICAgMjQ0LFxuICAgICAgMTMyLFxuICAgICAgODMsXG4gICAgICA1NCxcbiAgICAgIDEyNyxcbiAgICAgIDksXG4gICAgICAxMTIsXG4gICAgICA2MixcbiAgICAgIDIwLFxuICAgICAgMTgsXG4gICAgICAyMTgsXG4gICAgICAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDQ2LFxuICAgICAgMTg5LFxuICAgICAgODIsXG4gICAgICA5MixcbiAgICAgIDE3LFxuICAgICAgMTczLFxuICAgICAgMTc3LFxuICAgICAgMjMyLFxuICAgICAgMTYxLFxuICAgICAgNDYsXG4gICAgICAxMDMsXG4gICAgICA0MyxcbiAgICAgIDUsXG4gICAgICAxODEsXG4gICAgICAyMzksXG4gICAgICAxOTcsXG4gICAgICAxMTUsXG4gICAgICAxOTQsXG4gICAgICAyNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUktHTDhETkVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzc1NzA0MDI1OjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4Ly74qu38J2Uh/CdlKbwnZSw8J2UpvCdlKvwnZSh8J2UsiDwnZSH8J2UnvCdlKrwnZSw8J2UnvCdlKvwnZSh8J2UsuKruOC8ulwiLFxuICAgIFwibGlkXCI6IFwiMTA3MDc4MzgzMzE3MDMwOjQ1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pQZzFQY0RFT0xKNzdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZzBNQ1YwdDlTLzZ4UHFNczFvS25Ib1J0a05rdHorR2sxTHFrNXBqQ293ST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkZTBzRlZnbEh0MWllbHpwQzBQTVVJZlc5UU5lVWE0dXE0YXZ2Z09GekpCOVdRSExIUHd1ZmVDUnBtR1RPcTBMV0ZlNFd1SzdXRkNrWkJYS1VvcjZBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1eE01anZZZmNTcURmT0VMemlOLzduL2xySjVmQ01seVZBL096bFg3ZG1HL2picU0zVXlFUVhEYVRQM1lpczhiamRNTmlmWVVSazJCbUxsdGRGRXRDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3NTcwNDAyNTo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQ5MjcwOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdFa1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0VrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiY3NmN1BMK0MxdjdyNEsyU0t1SkxZWGhZMUFlYnQ1K01lU0hCNzNadmV5cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDU2MjU2MDE5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0OTI3MTcxMjdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "💫DISINDU💫",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
