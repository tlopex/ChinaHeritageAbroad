package com.ujcms.cms.core.domain.base;

import io.swagger.v3.oas.annotations.media.Schema;
import java.io.Serializable;
import javax.validation.constraints.NotNull;

/**
 * This class was generated by MyBatis Generator.
 *
 * @author MyBatis Generator
 */
public class SiteTreeBase implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     * 数据库表名
     */
    public static final String TABLE_NAME = "site_tree";

    @NotNull
    private Integer ancestorId = 0;

    @NotNull
    private Integer descendantId = 0;

    public Integer getAncestorId() {
        return ancestorId;
    }

    public void setAncestorId(Integer ancestorId) {
        this.ancestorId = ancestorId;
    }

    public Integer getDescendantId() {
        return descendantId;
    }

    public void setDescendantId(Integer descendantId) {
        this.descendantId = descendantId;
    }
}