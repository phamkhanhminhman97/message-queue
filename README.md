# Message Queue: RabbitMQ là một message queue - một dịch vụ phần mềm giúp truyền tải tin nhắn giữa các thành phần khác nhau của một hệ thống.

* Exchange: RabbitMQ sử dụng Exchange để phân phối tin nhắn đến queue tương ứng.

* Queue: Là nơi mà các tin nhắn được lưu trữ trước khi được xử lý bởi consumer.

* Producer: Là thành phần tạo ra tin nhắn và đưa vào RabbitMQ để được xử lý.

* Consumer: Là thành phần nhận và xử lý các tin nhắn từ RabbitMQ.

* Acknowledgement: Khi consumer xử lý xong tin nhắn, nó sẽ gửi lại acknowledgement cho RabbitMQ để xác nhận tin nhắn đã được xử lý thành công.

* Message Durability: RabbitMQ cho phép lưu trữ tin nhắn lên đĩa để đảm bảo không bị mất dữ liệu trong trường hợp xảy ra lỗi.

* Dead Letter Exchange: Là một Exchange đặc biệt, cho phép chuyển các tin nhắn bị lỗi hoặc không thể xử lý đến một Exchange khác để xử lý sau.

* RabbitMQ Management Console: RabbitMQ cung cấp một giao diện quản lý web để theo dõi và kiểm soát các thành phần của hệ thống.