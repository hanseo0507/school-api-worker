export class HttpException extends Error {
	public status: number;
	public message: string;

	constructor(status: number = 500, message: string = "일시적인 오류가 발생했어요.") {
		super(message);
		this.status = status;
		this.message = message;
	}
}
