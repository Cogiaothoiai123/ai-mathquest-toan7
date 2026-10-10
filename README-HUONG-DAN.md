# AI MathQuest – Toán 7: Số hữu tỉ
Ứng dụng mẫu có 3 nhiệm vụ, 6 câu hỏi, chấm điểm, gợi ý từng bước và trợ lý AI tùy chọn.

## Chạy thử trên máy tính Windows
1. Cài Node.js LTS từ https://nodejs.org/ nếu chưa có.
2. Giải nén ZIP, mở thư mục dự án.
3. Nhấp thanh địa chỉ File Explorer, gõ `cmd`, nhấn Enter.
4. Gõ `npm install`, chờ hoàn tất.
5. Gõ `npm start`.
6. Mở Chrome tại `http://localhost:3000`.
Không có API key thì trò chơi và gợi ý soạn sẵn vẫn hoạt động.

## Bật AI trực tuyến
Tạo API key trong tài khoản nhà cung cấp AI. Không dán khóa vào HTML hoặc GitHub.
Trên Render, mở dịch vụ → Environment → Add Environment Variable:
- Key: `OPENAI_API_KEY`
- Value: khóa API riêng của cô
- `OPENAI_MODEL` = `gpt-4o-mini` (nếu tài khoản hỗ trợ)
Lưu và deploy lại. Có thể phát sinh chi phí API tùy tài khoản và mức dùng.

## Đưa lên mạng bằng GitHub + Render
1. Tạo repository GitHub tên `ai-mathquest-toan7`.
2. Tải các tệp bên trong thư mục dự án lên repository; phải thấy `package.json`, `server.js`, `public/` ở cấp đầu.
3. Commit changes.
4. Vào https://render.com, đăng nhập bằng GitHub → New + → Web Service → chọn repository.
5. Build Command: `npm install`; Start Command: `npm start`; chọn gói phù hợp.
6. Deploy. Render sẽ cấp URL dạng `https://ten-dich-vu.onrender.com`.
7. Thêm `OPENAI_API_KEY` ở Environment rồi deploy lại.
Tài liệu chính thức: https://render.com/docs/deploy-node-express-app và https://render.com/docs/configure-environment-variables

## Lưu ý
- Giáo viên cần rà soát câu hỏi, lời giải và tính phù hợp chương trình trước khi sử dụng.
- Không nhập dữ liệu cá nhân nhạy cảm của học sinh vào chat.
- Điểm chỉ tồn tại trong phiên trình duyệt, chưa có cơ sở dữ liệu.
- Cần thử nghiệm thực tế và lưu minh chứng thật; ứng dụng không tự tạo minh chứng dự thi.
