
import {toast} from 'react-toastify';


// import {urlJoin} from "url-join-ts";

export interface IServerErrorModel {
  Text: string;
  ExceptionMessage: string;
  isDebugMode?: boolean;
  StackTrace?: string;
}

export class ErrorService {
  protected async InternalServerErrorProcessingBehavior(
      response: Response,
      isHideErrorCallback?: (statusCode: number) => boolean,
  ): Promise<void> {
    let error_5xx_message: string | null = null;
    switch (response.status) {
      case 502:
        error_5xx_message = "Сервер временно недоступен";
        break;
      case 503:
        error_5xx_message = "Технические неполадки. Обновите страницу или зайдите позднее";
        break;
      case 504:
        error_5xx_message = "Превышено время ожидания ответа сервера";
        break;
      case 505:
        error_5xx_message = "Неподдерживаемая браузером версия http. https://www.nic.ru/help/oshibki-500-502-503-504-505_8526.html#13";
        toast.error(await response.text());
        break;
    }

    if (error_5xx_message !== null) {
      toast.error(error_5xx_message);
      return;
    }

    const errorText = await response.text();
    let error: IServerErrorModel | null = null;
    let errorObject;
    try {
      errorObject = JSON.parse(errorText);
    } catch (err) {
      if (!(isHideErrorCallback && isHideErrorCallback(response.status))) {
        toast.error(errorText);
      }
      throw new Error(errorText);
    }

    if (errorObject.ExceptionMessage) {
      error = JSON.parse(errorText);
    } else {
      toast.error(errorText);
      throw new Error(JSON.stringify(errorText));
    }

    if (error !== null) {
      if (!(isHideErrorCallback && isHideErrorCallback(response.status))) {
        if (response.status === 400 && error.ExceptionMessage.includes("[Код ошибки #001]")) {
          toast.warn("Ошибка подключения: Неверный логин или пароль.");
        } else {
          toast.error(error.ExceptionMessage);
        }
      }
      console.groupCollapsed("Подробности ошибки:");
      console.groupCollapsed("Error:");
      console.log(error.ExceptionMessage);
      console.groupEnd();
      console.groupCollapsed("Server stack trace:");
      console.log(error.StackTrace);
      console.groupEnd();
      console.groupEnd();
      throw new Error(error.ExceptionMessage);
    } else {
      toast.error("См. консоль");
    }
  }

  protected async UnauthorizedProcessingCookiesBehavior(
      // response: Response,
      // isHideErrorCallback?: (statusCode: number) => boolean,
  ): Promise<void> {
    // if (response.status === StatusCodes.UNAUTHORIZED) {
    //
    //
    //   const tokens = StorageHelper.getData(StorageTypeNames.UserToken)
    //   console.log("UnauthorizedProcessingCookiesBehaviorrr");
    //   console.log('перед проверкой токенов');
    //
    //   if (tokens) {
    //     console.log("here2")
    //     debugger
    //     try {
    //         // Если токены есть, пытаемся обновить их
    //       const newTokens = await authServices.refreshAccessToken();
    //
    //       authServices.updateUserTokens(newTokens); // сохраняем новые токены
    //
    //
    //     } catch (refreshError) {
    //       // Если обновление токенов не удалось (например, refreshToken просрочен), перенаправляем на страницу логина
    //       this.goToLogin();
    //     }
    //   } else {
    //     if (isHideErrorCallback && !isHideErrorCallback(response.status)) {
    //       toast.warning("Ошибка авторизации");
    //     }
    //     // StorageHelper.remove(StorageTypeNames.User);
    //     this.goToLogin();
    //   }
    //
    // }
  }

  public goToLogin() {
    if (window.location.pathname !== '/login') window.location.href = '/login';
  }
}