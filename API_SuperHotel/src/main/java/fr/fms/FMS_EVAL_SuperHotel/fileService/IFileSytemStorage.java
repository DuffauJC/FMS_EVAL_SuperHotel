package fr.fms.FMS_EVAL_SuperHotel.fileService;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface IFileSytemStorage {
    void init();
    String saveFile(MultipartFile file);
    Resource loadFile(String fileName);
}
