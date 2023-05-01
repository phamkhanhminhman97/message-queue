
#  Trên khía cạnh trigger thì background job có thể xuất phát từ 2 loại trigger sau:

  
*  Event-driven trigger: Là job được khởi chạy dựa trên 1 event nào đó xảy ra trong hệ thống. Có thể là việc 1 API được gọi, 1 Object được lưu vào DB,...

  

*  Schedule-driven trigger: Là job khởi chạy dựa trên thời gian. Đó có thể là job định kỳ (hàng ngày, hàng giờ,...) hoặc job vào một thời điểm hay sau 1 thời điểm nhất định nào đó.

  

##  Event-driven job

Bạn sẽ sử dụng event-driven job khi nó phụ thuộc vào việc xuất hiện của những sự kiện không biết sẽ xảy ra khi nào như:

  

Gửi email cho user khi họ đăng ký

Xử lý video sau khi user upload lên

Tạo report cho user sau khi họ submit yêu cầu ...

Event-driven job thường được trigger thông qua hệ thống job queue và worker. Mỗi khi có event, job,... được đẩy vào job queue thì worker sẽ lắng nghe và xử lý lần lượt.

  

Mô hình của event-driven job là xử lý hàng loạt cùng lúc dựa trên nhiều worker chạy song song. Do đó loại job này có tính scalable

## Schedule-driven job

**Schedule-driven** được sử dụng cho các tác vụ thường xuyên, **xác định được trước thời gian** chạy hoặc **lặp đi lặp lại** như:

-   **Publish bài post** đã được lên lịch sẵn
-   **Dọn dẹp file tạm** hàng ngày
-   **Gửi email báo cáo** hàng tuần ...

Schedule-driven job thường được trigger thông qua **crontab**, **interval** hay **forever repeat** code.

Mô hình của schedule-driven job thường là **một job** được xử lý tại 1 thời điểm theo thời gian được đặt sẵn. Vì vậy loại job này **KHÔNG có tính scalable**