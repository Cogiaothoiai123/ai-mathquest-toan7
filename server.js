require("dotenv").config();
const express=require("express"),path=require("path"),app=express();
app.use(express.json({limit:"1mb"}));app.use(express.static(path.join(__dirname,"public")));
app.post("/api/tutor",async(req,res)=>{
 const {question,studentAnswer,correctAnswer,explanation,studentMessage}=req.body||{};
 if(!process.env.OPENAI_API_KEY)return res.status(503).json({reply:"Trợ lý AI trực tuyến chưa được bật. Cô cần thêm OPENAI_API_KEY trong mục Environment của máy chủ. Trong lúc đó, em vẫn có thể dùng nút Gợi ý từng bước có sẵn."});
 if(!question)return res.status(400).json({reply:"Em hãy gửi câu hỏi Toán để trợ lý hỗ trợ nhé."});
 try{
  const r=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Authorization":"Bearer "+process.env.OPENAI_API_KEY,"Content-Type":"application/json"},body:JSON.stringify({model:process.env.OPENAI_MODEL||"gpt-4o-mini",temperature:.4,max_tokens:450,messages:[
   {role:"system",content:"Bạn là trợ lý Toán lớp 7 Việt Nam, chủ đề số hữu tỉ. Trả lời tiếng Việt thân thiện, chính xác, phù hợp học sinh 12-13 tuổi. Ưu tiên gợi ý từng bước và câu hỏi dẫn dắt thay vì nói ngay đáp án; giải thích ngắn gọn, không bịa quy tắc."},
   {role:"user",content:`Câu hỏi: ${question}\nCâu trả lời của học sinh: ${studentAnswer||"Chưa trả lời"}\nĐáp án đúng: ${correctAnswer||"Chưa cung cấp"}\nLời giải chuẩn: ${explanation||"Hãy tự giải thích"}\nHọc sinh hỏi: ${studentMessage||"Gợi ý từng bước"}`}
  ]})});
  const d=await r.json();if(!r.ok)return res.status(502).json({reply:"AI tạm thời chưa trả lời được. Em hãy thử lại hoặc dùng gợi ý có sẵn."});
  res.json({reply:d.choices?.[0]?.message?.content||"Em thử hỏi lại nhé."});
 }catch(e){res.status(500).json({reply:"Có lỗi kết nối. Em thử lại nhé."})}
});
app.get("/health",(_,res)=>res.json({ok:true}));
app.listen(process.env.PORT||3000,"0.0.0.0",()=>console.log("AI MathQuest started"));
