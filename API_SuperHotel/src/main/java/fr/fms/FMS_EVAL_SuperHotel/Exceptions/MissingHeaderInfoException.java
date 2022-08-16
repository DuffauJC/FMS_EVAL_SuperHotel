package fr.fms.FMS_EVAL_SuperHotel.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class MissingHeaderInfoException extends RuntimeException{
    private static final long serialVersionUID=1L;

    public MissingHeaderInfoException(String message){
        super(message);
    }
}
