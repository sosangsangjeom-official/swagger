
window.onload = function() {
  // Build a system
  let url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  let options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "paths": {
      "/info/post-category": {
        "get": {
          "operationId": "InfoController_postCategoryFindMany",
          "summary": "게시물 카테고리 조회 API",
          "parameters": [
            {
              "name": "postTypeId",
              "required": false,
              "in": "query",
              "description": "게시물 타입 아이디",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/InfoPostCategoryFindManyResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "info"
          ]
        }
      },
      "/info/post-type": {
        "get": {
          "operationId": "InfoController_postTypeFindMany",
          "summary": "게시물 타입 조회 API",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/InfoPostTypeFindManyResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "info"
          ]
        }
      },
      "/info/agreements-event-category": {
        "get": {
          "operationId": "InfoController_agreementsEventCategoryFindMany",
          "summary": "협업 요청 이벤트 카테고리 조회 API",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "info"
          ]
        }
      },
      "/info/agreements-promotion-category": {
        "get": {
          "operationId": "InfoController_agreementsPromotionCategoryFindMany",
          "summary": "협업 요청 프로모션 카테고리 조회 API",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "info"
          ]
        }
      },
      "/info/agreements-type": {
        "get": {
          "operationId": "InfoController_agreementsTypeFindMany",
          "summary": "협업 타입 조회 API",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "info"
          ]
        }
      },
      "/info/store-category": {
        "get": {
          "operationId": "InfoController_storeCategoryFindMany",
          "summary": "상점 카테고리 조회 API",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "info"
          ]
        }
      },
      "/info/store-review-keyword": {
        "get": {
          "operationId": "InfoController_storeReviewKeywordFindMany",
          "summary": "상점 리뷰 키워드 조회 API",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "info"
          ]
        }
      },
      "/info/participant-input": {
        "get": {
          "operationId": "InfoController_participantInputFindMany",
          "summary": "지원자 필수 입력값 조회 API",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "info"
          ]
        }
      },
      "/management/terms": {
        "post": {
          "operationId": "TermsManagementController_create",
          "summary": "약관 생성 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TermsManagementCreateDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TermsManagementCreateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/terms"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "TermsManagementController_findList",
          "summary": "약관 목록 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "sort",
              "required": false,
              "in": "query",
              "description": "정렬 기준",
              "schema": {
                "enum": [
                  "CREATED_AT:DESC"
                ],
                "type": "string"
              }
            },
            {
              "name": "page",
              "required": true,
              "in": "query",
              "description": "요청할 페이지 | 최소 1",
              "schema": {
                "minimum": 1,
                "type": "number"
              }
            },
            {
              "name": "take",
              "required": true,
              "in": "query",
              "description": "요청할 데이터 수 | 최소 1 | 최대 100",
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TermsManagementFindListResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/terms"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/management/terms/id": {
        "put": {
          "operationId": "TermsManagementController_update",
          "summary": "약관 수정 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TermsManagementUpdateDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TermsManagementUpdateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/terms"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/management/terms/{id}": {
        "delete": {
          "operationId": "TermsManagementController_delete",
          "summary": "약관 삭제 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TermsManagementDeleteResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/terms"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "TermsManagementController_findUnique",
          "summary": "약관 상세 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TermsManagementFindUniqueResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/terms"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/management/post-comments": {
        "post": {
          "operationId": "PostCommentManagementController_create",
          "summary": "댓글 생성 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PostCommentManagementCreateDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostCommentManagementCreateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/post-comments"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "PostCommentManagementController_findList",
          "summary": "댓글 목록 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "sort",
              "required": false,
              "in": "query",
              "description": "정렬 기준",
              "schema": {
                "enum": [
                  "CREATED_AT:DESC"
                ],
                "type": "string"
              }
            },
            {
              "name": "page",
              "required": true,
              "in": "query",
              "description": "요청할 페이지 | 최소 1",
              "schema": {
                "minimum": 1,
                "type": "number"
              }
            },
            {
              "name": "take",
              "required": true,
              "in": "query",
              "description": "요청할 데이터 수 | 최소 1 | 최대 100",
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostCommentManagementFindListResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/post-comments"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/management/post-comments/{id}": {
        "put": {
          "operationId": "PostCommentManagementController_update",
          "summary": "댓글 수정 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PostCommentManagementUpdateDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostCommentManagementUpdateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/post-comments"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "delete": {
          "operationId": "PostCommentManagementController_delete",
          "summary": "댓글 삭제 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostCommentManagementDeleteResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/post-comments"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "PostCommentManagementController_findUnique",
          "summary": "댓글 상세 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostCommentManagementFindUniqueResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/post-comments"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/management/posts": {
        "post": {
          "operationId": "PostManagementController_create",
          "summary": "게시물 생성 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PostManagementCreateDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostManagementCreateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/posts"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "PostManagementController_findList",
          "summary": "게시물 목록 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "sort",
              "required": false,
              "in": "query",
              "description": "정렬 기준",
              "schema": {
                "enum": [
                  "CREATED_AT:DESC"
                ],
                "type": "string"
              }
            },
            {
              "name": "state",
              "required": false,
              "in": "query",
              "description": "상태 여부",
              "schema": {
                "enum": [
                  "ENABLED",
                  "DISABLED"
                ],
                "type": "string"
              }
            },
            {
              "name": "postTypeId",
              "required": false,
              "in": "query",
              "description": "게시물 타입",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "postCategoryId",
              "required": false,
              "in": "query",
              "description": "게시물 카테고리",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "isAnswer",
              "required": false,
              "in": "query",
              "description": "답변완료 여부 (Q&A ONLY)",
              "schema": {
                "type": "boolean"
              }
            },
            {
              "name": "page",
              "required": true,
              "in": "query",
              "description": "요청할 페이지 | 최소 1",
              "schema": {
                "minimum": 1,
                "type": "number"
              }
            },
            {
              "name": "take",
              "required": true,
              "in": "query",
              "description": "요청할 데이터 수 | 최소 1 | 최대 100",
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostManagementFindListResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/posts"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/management/posts/{id}": {
        "put": {
          "operationId": "PostManagementController_update",
          "summary": "게시물 수정 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PostManagementUpdateDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostManagementUpdateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/posts"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "delete": {
          "operationId": "PostManagementController_delete",
          "summary": "게시물 삭제 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostManagementDeleteResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/posts"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "PostManagementController_findUnique",
          "summary": "게시물 상세 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostManagementFindUniqueResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/posts"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/management/users": {
        "post": {
          "operationId": "UserManagementController_create",
          "summary": "유저 생성 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserManagementCreateDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserManagementCreateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/users"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "UserManagementController_findList",
          "summary": "유저 목록 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "sort",
              "required": false,
              "in": "query",
              "description": "정렬 기준",
              "schema": {
                "enum": [
                  "CREATED_AT:DESC"
                ],
                "type": "string"
              }
            },
            {
              "name": "page",
              "required": true,
              "in": "query",
              "description": "요청할 페이지 | 최소 1",
              "schema": {
                "minimum": 1,
                "type": "number"
              }
            },
            {
              "name": "take",
              "required": true,
              "in": "query",
              "description": "요청할 데이터 수 | 최소 1 | 최대 100",
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserManagementFindListResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/users"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/management/users/{id}": {
        "put": {
          "operationId": "UserManagementController_update",
          "summary": "유저 수정 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserManagementUpdateDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserManagementUpdateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/users"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "delete": {
          "operationId": "UserManagementController_delete",
          "summary": "유저 삭제 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserManagementDeleteResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/users"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "UserManagementController_findUnique",
          "summary": "유저 상세 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserManagementFindUniqueResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/users"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/management/users/duplicate/login-id/{loginId}": {
        "get": {
          "operationId": "UserManagementController_duplicateLoginIdCheck",
          "summary": "로그인 아이디 중복검사 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "loginId",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserManagementDuplicateLoginIdCheckResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/users"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/management/users/duplicate/nickname/{nickname}": {
        "get": {
          "operationId": "UserManagementController_duplicateNicknameCheck",
          "summary": "닉네임 중복검사 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "nickname",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserManagementDuplicateNicknameCheckResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/users"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/management/admins": {
        "post": {
          "operationId": "AdminManagementController_create",
          "summary": "관리자 생성 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdminManagementCreateDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AdminManagementCreateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/admins"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "AdminManagementController_findList",
          "summary": "관리자 목록 조회 API",
          "parameters": [
            {
              "name": "sort",
              "required": false,
              "in": "query",
              "description": "정렬 기준",
              "schema": {
                "enum": [
                  "CREATED_AT:DESC"
                ],
                "type": "string"
              }
            },
            {
              "name": "page",
              "required": true,
              "in": "query",
              "description": "요청할 페이지 | 최소 1",
              "schema": {
                "minimum": 1,
                "type": "number"
              }
            },
            {
              "name": "take",
              "required": true,
              "in": "query",
              "description": "요청할 데이터 수 | 최소 1 | 최대 100",
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AdminManagementFindListResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/admins"
          ]
        }
      },
      "/management/admins/password/own": {
        "patch": {
          "operationId": "AdminManagementController_updatePassword",
          "summary": "비밀번호 변경 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdminManagementUpdatePasswordDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AdminManagementUpdatePasswordResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/admins"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/management/admins/{id}": {
        "put": {
          "operationId": "AdminManagementController_update",
          "summary": "관리자 수정 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AdminManagementUpdateDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AdminManagementUpdateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/admins"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "delete": {
          "operationId": "AdminManagementController_delete",
          "summary": "관리자 삭제 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AdminManagementDeleteResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/admins"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "AdminManagementController_findUnique",
          "summary": "관리자 상세 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AdminManagementFindUniqueResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/admins"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/management/stores": {
        "post": {
          "operationId": "StoreManagementController_create",
          "summary": "상점 생성 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StoreManagementCreateDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StoreManagementCreateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/stores"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "StoreManagementController_findList",
          "summary": "상점 목록 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "name",
              "required": false,
              "in": "query",
              "description": "상점 명",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "searchCategory",
              "required": false,
              "in": "query",
              "description": "검색 카테고리",
              "schema": {
                "enum": [
                  "popular",
                  "collaboOpen",
                  "collaboRecommendation"
                ],
                "type": "string"
              }
            },
            {
              "name": "infoStoreCategoryId",
              "required": false,
              "in": "query",
              "description": "상점 카테고리",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "sort",
              "required": false,
              "in": "query",
              "description": "정렬 기준",
              "schema": {
                "enum": [
                  "CREATED_AT:DESC"
                ],
                "type": "string"
              }
            },
            {
              "name": "page",
              "required": true,
              "in": "query",
              "description": "요청할 페이지 | 최소 1",
              "schema": {
                "minimum": 1,
                "type": "number"
              }
            },
            {
              "name": "take",
              "required": true,
              "in": "query",
              "description": "요청할 데이터 수 | 최소 1 | 최대 100",
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StoreManagementFindListResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/stores"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/management/stores/{id}": {
        "put": {
          "operationId": "StoreManagementController_update",
          "summary": "상점 수정 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StoreManagementUpdateDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StoreManagementUpdateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/stores"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "delete": {
          "operationId": "StoreManagementController_delete",
          "summary": "상점 삭제 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StoreManagementDeleteResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/stores"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "StoreManagementController_findUnique",
          "summary": "상점 단일 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StoreManagementFindUniqueResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/stores"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/management/chat-rooms": {
        "post": {
          "operationId": "ChatRoomManagementController_create",
          "summary": "채팅방 생성 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ChatRoomManagementCreateDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ChatRoomManagementCreateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/chat-rooms"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "ChatRoomManagementController_findList",
          "summary": "채팅방 목록 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "sort",
              "required": false,
              "in": "query",
              "description": "정렬 기준",
              "schema": {
                "enum": [
                  "CREATED_AT:DESC"
                ],
                "type": "string"
              }
            },
            {
              "name": "page",
              "required": true,
              "in": "query",
              "description": "요청할 페이지 | 최소 1",
              "schema": {
                "minimum": 1,
                "type": "number"
              }
            },
            {
              "name": "take",
              "required": true,
              "in": "query",
              "description": "요청할 데이터 수 | 최소 1 | 최대 100",
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ChatRoomManagementFindListResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/chat-rooms"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/management/chat-rooms/{id}": {
        "put": {
          "operationId": "ChatRoomManagementController_update",
          "summary": "채팅방 수정 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ChatRoomManagementUpdateDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ChatRoomManagementUpdateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/chat-rooms"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "delete": {
          "operationId": "ChatRoomManagementController_delete",
          "summary": "채팅방 삭제 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ChatRoomManagementDeleteResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/chat-rooms"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "ChatRoomManagementController_findUnique",
          "summary": "채팅방 단일 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ChatRoomManagementFindUniqueResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "management/chat-rooms"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/stores/merchant-number-dupliate-check/{number}": {
        "post": {
          "operationId": "StoreController_merchantNumberDupliateCheck",
          "summary": "사업자 번호 중복 체크 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "number",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StoreMerchantNumberDupliateCheckResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "stores"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/stores/{id}": {
        "get": {
          "operationId": "StoreController_findUnique",
          "summary": "상점 단일 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StoreFindUniqueResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "stores"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/stores": {
        "get": {
          "operationId": "StoreController_findList",
          "summary": "상점 목록 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "name",
              "required": false,
              "in": "query",
              "description": "상점 명",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "latitude",
              "required": false,
              "in": "query",
              "description": "위도",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "longitude",
              "required": false,
              "in": "query",
              "description": "경도",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "searchCategory",
              "required": false,
              "in": "query",
              "description": "검색 카테고리",
              "schema": {
                "enum": [
                  "popular",
                  "collaboOpen",
                  "collaboRecommendation"
                ],
                "type": "string"
              }
            },
            {
              "name": "infoStoreCategoryId",
              "required": false,
              "in": "query",
              "description": "상점 카테고리",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "page",
              "required": true,
              "in": "query",
              "description": "요청할 페이지 | 최소 1",
              "schema": {
                "minimum": 1,
                "type": "number"
              }
            },
            {
              "name": "take",
              "required": true,
              "in": "query",
              "description": "요청할 데이터 수 | 최소 1 | 최대 100",
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StoreFindListResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "stores"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/agreements-requests/ai": {
        "post": {
          "operationId": "AgreementsRequestController_aIRecommendationRequest",
          "summary": "AI 협약 요청 생성하기 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AgreementsRequestAiRecommendationRequestDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "agreements-requests"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/agreements-requests": {
        "post": {
          "operationId": "AgreementsRequestController_create",
          "summary": "협약 요청 생성 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AgreementsRequestCreateDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AgreementsRequestCreateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "agreements-requests"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "AgreementsRequestController_findList",
          "summary": "협약 요청 목록 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "keyword",
              "required": false,
              "in": "query",
              "description": "검색 키워드",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "sort",
              "required": false,
              "in": "query",
              "description": "정렬 기준",
              "schema": {
                "enum": [
                  "CREATED_AT:DESC"
                ],
                "type": "string"
              }
            },
            {
              "name": "page",
              "required": true,
              "in": "query",
              "description": "요청할 페이지 | 최소 1",
              "schema": {
                "minimum": 1,
                "type": "number"
              }
            },
            {
              "name": "take",
              "required": true,
              "in": "query",
              "description": "요청할 데이터 수 | 최소 1 | 최대 100",
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AgreementsRequestFindListResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "agreements-requests"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/agreements-requests/{id}": {
        "put": {
          "operationId": "AgreementsRequestController_update",
          "summary": "협약 요청 수정 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AgreementsRequestUpdateDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AgreementsRequestUpdateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "agreements-requests"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "delete": {
          "operationId": "AgreementsRequestController_delete",
          "summary": "협약 요청 삭제 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AgreementsRequestDeleteResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "agreements-requests"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "AgreementsRequestController_findUnique",
          "summary": "협약 요청 단일 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AgreementsRequestFindUniqueResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "agreements-requests"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/users/initial": {
        "put": {
          "operationId": "UserController_initialUpdate",
          "summary": "(소셜 게스트 전용) 초기 정보 업데이트 API",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserInitialUpdateDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserInitialUpdateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "users"
          ]
        }
      },
      "/users/own": {
        "put": {
          "operationId": "UserController_updateOwn",
          "summary": "내 정보 수정 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserUpdateOwnDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserUpdateOwnResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "users"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "delete": {
          "operationId": "UserController_deleteOwn",
          "summary": "회원탈퇴 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserDeleteOwnResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "users"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "UserController_findUnique",
          "summary": "내 정보 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserFindUniqueOwnResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "users"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/users/own/password": {
        "patch": {
          "operationId": "UserController_updatePasswordOwn",
          "summary": "내 비밀번호 수정 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserUpdatePasswordOwnDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserUpdatePasswordOwnResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "users"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/users/duplicate/login-id/{loginId}": {
        "get": {
          "operationId": "UserController_duplicateLoginIdCheck",
          "summary": "로그인 아이디 중복검사 API",
          "parameters": [
            {
              "name": "loginId",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserDuplicateLoginIdCheckResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "users"
          ]
        }
      },
      "/users/duplicate/nickname/{nickname}": {
        "get": {
          "operationId": "UserController_duplicateNicknameCheck",
          "summary": "닉네임 중복검사 API",
          "parameters": [
            {
              "name": "nickname",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserDuplicateNicknameCheckResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "users"
          ]
        }
      },
      "/agreements-stories": {
        "post": {
          "operationId": "AgreementsStoryController_create",
          "summary": "협업 이야기 생성 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AgreementsStoryCreateDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AgreementsStoryCreateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "agreements-stories"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "AgreementsStoryController_findList",
          "summary": "협업 이야기 목록 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "sort",
              "required": false,
              "in": "query",
              "description": "정렬 기준",
              "schema": {
                "enum": [
                  "CREATED_AT:DESC"
                ],
                "type": "string"
              }
            },
            {
              "name": "page",
              "required": true,
              "in": "query",
              "description": "요청할 페이지 | 최소 1",
              "schema": {
                "minimum": 1,
                "type": "number"
              }
            },
            {
              "name": "take",
              "required": true,
              "in": "query",
              "description": "요청할 데이터 수 | 최소 1 | 최대 100",
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AgreementsStoryFindListResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "agreements-stories"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/agreements-stories/{id}": {
        "put": {
          "operationId": "AgreementsStoryController_update",
          "summary": "협업 이야기 수정 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AgreementsStoryUpdateDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AgreementsStoryUpdateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "agreements-stories"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "delete": {
          "operationId": "AgreementsStoryController_delete",
          "summary": "협업 이야기 삭제 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AgreementsStoryDeleteResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "agreements-stories"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "AgreementsStoryController_findUnique",
          "summary": "협업 이야기 단일 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AgreementsStoryFindUniqueResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "agreements-stories"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/terms": {
        "get": {
          "operationId": "TermsController_findMany",
          "summary": "약관 조회 API",
          "parameters": [
            {
              "name": "type",
              "required": false,
              "in": "query",
              "description": "타입 | 빈 값 : 전체",
              "schema": {
                "enum": [
                  "PRIVACY_POLICY",
                  "TERMS_OF_USE"
                ],
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TermsFindManyResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "terms"
          ]
        }
      },
      "/post-comments": {
        "post": {
          "operationId": "PostCommentController_create",
          "summary": "댓글 생성 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PostCommentCreateDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostCommentCreateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "post-comments"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "PostCommentController_findList",
          "summary": "댓글 목록 조회 API",
          "parameters": [
            {
              "name": "postId",
              "required": true,
              "in": "query",
              "description": "게시물 아이디",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "sort",
              "required": false,
              "in": "query",
              "description": "정렬 기준",
              "schema": {
                "enum": [
                  "CREATED_AT:DESC"
                ],
                "type": "string"
              }
            },
            {
              "name": "page",
              "required": true,
              "in": "query",
              "description": "요청할 페이지 | 최소 1",
              "schema": {
                "minimum": 1,
                "type": "number"
              }
            },
            {
              "name": "take",
              "required": true,
              "in": "query",
              "description": "요청할 데이터 수 | 최소 1 | 최대 100",
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostCommentFindListResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "post-comments"
          ]
        }
      },
      "/post-comments/{id}": {
        "put": {
          "operationId": "PostCommentController_update",
          "summary": "댓글 수정 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PostCommentUpdateOwnDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostCommentUpdateOwnResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "post-comments"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "delete": {
          "operationId": "PostCommentController_delete",
          "summary": "댓글 삭제 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostCommentDeleteOwnResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "post-comments"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "PostCommentController_findUnique",
          "summary": "댓글 상세 조회 API",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostCommentFindUniqueResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "post-comments"
          ]
        }
      },
      "/posts": {
        "post": {
          "operationId": "PostController_create",
          "summary": "게시물 생성 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PostCreateDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostCreateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "posts"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "PostController_findList",
          "summary": "게시물 목록 조회 API",
          "parameters": [
            {
              "name": "postTypeId",
              "required": true,
              "in": "query",
              "description": "타입",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "postCategoryId",
              "required": false,
              "in": "query",
              "description": "카테고리",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "sort",
              "required": false,
              "in": "query",
              "description": "정렬 기준",
              "schema": {
                "enum": [
                  "CREATED_AT:DESC"
                ],
                "type": "string"
              }
            },
            {
              "name": "page",
              "required": true,
              "in": "query",
              "description": "요청할 페이지 | 최소 1",
              "schema": {
                "minimum": 1,
                "type": "number"
              }
            },
            {
              "name": "take",
              "required": true,
              "in": "query",
              "description": "요청할 데이터 수 | 최소 1 | 최대 100",
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostFindListResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "posts"
          ]
        }
      },
      "/posts/guest-only": {
        "post": {
          "operationId": "PostController_createByGuest",
          "summary": "게시물 생성 (비회원 전용) API",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PostCreateByGuestDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostCreateByGuestResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "posts"
          ]
        }
      },
      "/posts/own/{id}": {
        "put": {
          "operationId": "PostController_updateOwn",
          "summary": "내 게시물 수정 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PostUpdateOwnDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostUpdateOwnResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "posts"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "delete": {
          "operationId": "PostController_deleteOwn",
          "summary": "내 게시물 삭제 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostDeleteOwnResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "posts"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/posts/guest-only/own/{id}": {
        "put": {
          "operationId": "PostController_updateByGuestOwn",
          "summary": "내 게시물 수정 (비회원 전용) API",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PostUpdateByGuestOwnDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostUpdateByGuestOwnResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "posts"
          ]
        },
        "delete": {
          "operationId": "PostController_deleteByGuestOwn",
          "summary": "내 게시물 삭제 (비회원 전용) API",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "guestPassword",
              "required": true,
              "in": "query",
              "description": "비회원 패스워드",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostDeleteByGuestOwnResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "posts"
          ]
        }
      },
      "/posts/like/{id}": {
        "patch": {
          "operationId": "PostController_updateLike",
          "summary": "게시물 좋아요/취소 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostUpdateLikeResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "posts"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/posts/{id}": {
        "get": {
          "operationId": "PostController_findUnique",
          "summary": "게시물 상세 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.\n\n - 토큰 없이 조회 가능하나, 로그인 상태인 경우 필히 토큰을 보내주세요.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "guestPassword",
              "required": false,
              "in": "query",
              "description": "비회원 패스워드",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/PostFindUniqueResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "posts"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/store-on-reviews": {
        "post": {
          "operationId": "StoreOnReviewController_create",
          "summary": "상점 리뷰 생성 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StoreOnReviewCreateDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StoreOnReviewCreateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "store-on-reviews"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "StoreOnReviewController_findList",
          "summary": "상점 리뷰 목록 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "sort",
              "required": false,
              "in": "query",
              "description": "정렬 기준",
              "schema": {
                "enum": [
                  "CREATED_AT:DESC"
                ],
                "type": "string"
              }
            },
            {
              "name": "storeReviewId",
              "required": false,
              "in": "query",
              "description": "상점 리뷰",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "storeId",
              "required": false,
              "in": "query",
              "description": "상점",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "infoStoreReviewKeywordId",
              "required": false,
              "in": "query",
              "description": "상점 카테고리",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "agreementsRequestId",
              "required": false,
              "in": "query",
              "description": "협업 요청",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "page",
              "required": true,
              "in": "query",
              "description": "요청할 페이지 | 최소 1",
              "schema": {
                "minimum": 1,
                "type": "number"
              }
            },
            {
              "name": "take",
              "required": true,
              "in": "query",
              "description": "요청할 데이터 수 | 최소 1 | 최대 100",
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StoreOnReviewFindListResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "store-on-reviews"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/store-on-reviews/{id}": {
        "put": {
          "operationId": "StoreOnReviewController_update",
          "summary": "상점 리뷰 수정 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StoreOnReviewUpdateDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StoreOnReviewUpdateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "store-on-reviews"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "delete": {
          "operationId": "StoreOnReviewController_delete",
          "summary": "상점 리뷰 영구 삭제 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StoreOnReviewDeleteResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "store-on-reviews"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "StoreOnReviewController_findUnique",
          "summary": "상점 리뷰 단일 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StoreOnReviewFindUniqueResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "store-on-reviews"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/store-reviews": {
        "post": {
          "operationId": "StoreReviewController_create",
          "summary": "상점 리뷰 생성 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StoreReviewCreateDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StoreReviewCreateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "store-reviews"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "StoreReviewController_findList",
          "summary": "상점 리뷰 목록 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "sort",
              "required": false,
              "in": "query",
              "description": "정렬 기준",
              "schema": {
                "enum": [
                  "CREATED_AT:DESC"
                ],
                "type": "string"
              }
            },
            {
              "name": "page",
              "required": true,
              "in": "query",
              "description": "요청할 페이지 | 최소 1",
              "schema": {
                "minimum": 1,
                "type": "number"
              }
            },
            {
              "name": "take",
              "required": true,
              "in": "query",
              "description": "요청할 데이터 수 | 최소 1 | 최대 100",
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StoreReviewFindListResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "store-reviews"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/store-reviews/{id}": {
        "put": {
          "operationId": "StoreReviewController_update",
          "summary": "상점 리뷰 수정 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StoreReviewUpdateDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StoreReviewUpdateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "store-reviews"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "delete": {
          "operationId": "StoreReviewController_delete",
          "summary": "상점 리뷰 삭제 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StoreReviewDeleteResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "store-reviews"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "StoreReviewController_findUnique",
          "summary": "상점 리뷰 단일 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StoreReviewFindUniqueResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "store-reviews"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/auth": {
        "post": {
          "operationId": "AuthController_defaultLogin",
          "summary": "테스트 - 일반 로그인 API",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthDefaultLoginDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AuthDefaultLoginResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "auth"
          ]
        },
        "delete": {
          "operationId": "AuthController_logout",
          "summary": "로그아웃 API",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AuthLogoutResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "auth"
          ]
        },
        "get": {
          "operationId": "AuthController_getPayload",
          "summary": "페이로드 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.\n\n - 토큰이 만료되었는지 확인하기 위한 API",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AuthPayloadResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "auth"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/auth/admin": {
        "post": {
          "operationId": "AuthController_adminLogin",
          "summary": "관리자 로그인 API",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthAdminLoginDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AuthAdminLoginResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "auth"
          ]
        }
      },
      "/auth/oauth2/web": {
        "post": {
          "operationId": "AuthController_oAuth2WebLogin",
          "summary": "소셜 로그인 (웹 전용) API",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthOAuth2WebLoginDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AuthOAuth2WebLoginResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "auth"
          ]
        }
      },
      "/auth/send-code": {
        "post": {
          "operationId": "AuthController_sendCode",
          "summary": "인증 코드 전송️ API",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthSendCodeDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AuthSendCodeResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "auth"
          ]
        }
      },
      "/auth/verify-code": {
        "post": {
          "operationId": "AuthController_verifyCode",
          "summary": "인증 코드 검증 API",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthVerifyCodeDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AuthVerifyCodeResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "auth"
          ]
        }
      },
      "/chat-rooms": {
        "post": {
          "operationId": "ChatRoomController_create",
          "summary": "채팅방 생성 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ChatRoomCreateDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ChatRoomCreateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "chat-rooms"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        },
        "get": {
          "operationId": "ChatRoomController_findList",
          "summary": "채팅방 목록 조회 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [
            {
              "name": "sort",
              "required": false,
              "in": "query",
              "description": "정렬 기준",
              "schema": {
                "enum": [
                  "CREATED_AT:DESC"
                ],
                "type": "string"
              }
            },
            {
              "name": "chatRoomId",
              "required": false,
              "in": "query",
              "description": "채팅방 아이디(채팅 상세)",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "page",
              "required": true,
              "in": "query",
              "description": "요청할 페이지 | 최소 1",
              "schema": {
                "minimum": 1,
                "type": "number"
              }
            },
            {
              "name": "take",
              "required": true,
              "in": "query",
              "description": "요청할 데이터 수 | 최소 1 | 최대 100",
              "schema": {
                "minimum": 1,
                "maximum": 100,
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ChatRoomFindListResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "chat-rooms"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/chat-messages": {
        "post": {
          "operationId": "ChatMessageController_create",
          "summary": "채팅 메세지 생성 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ChatMessageCreateDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ChatMessageCreateResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "chat-messages"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/uploads/images": {
        "post": {
          "operationId": "UploadController_images",
          "summary": "이미지 업로드 API",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "multipart/form-data": {
                "schema": {
                  "$ref": "#/components/schemas/UploadImagesDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UploadImagesResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "uploads"
          ]
        }
      },
      "/uploads/html": {
        "post": {
          "operationId": "UploadController_html",
          "summary": "html 업로드 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "multipart/form-data": {
                "schema": {
                  "$ref": "#/components/schemas/UploadHtmlDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UploadHtmlResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "uploads"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/uploads/pdf": {
        "post": {
          "operationId": "UploadController_pdf",
          "summary": "pdf 업로드 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "multipart/form-data": {
                "schema": {
                  "$ref": "#/components/schemas/UploadPdfDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UploadPdfResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "uploads"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      },
      "/uploads": {
        "post": {
          "operationId": "UploadController_files",
          "summary": "일반 업로드 API",
          "description": "- 해당 API는 <b>토큰 인증</b>이 필요합니다.",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "multipart/form-data": {
                "schema": {
                  "$ref": "#/components/schemas/UploadFilesDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UploadFilesResponseDto"
                  }
                }
              }
            }
          },
          "tags": [
            "uploads"
          ],
          "security": [
            {
              "accessToken": []
            }
          ]
        }
      }
    },
    "info": {
      "title": "소상상점 API Docs",
      "description": "#### Description \n\n - 토큰 인증이 필요한 API의 경우 설명이 추가됩니다.\n\n - 모든 날짜는 국제 표준 시간대 **(UTC)**으로 반환됩니다.\n\n - 요청 시 날짜 관련 데이터는 로컬 시간대를 **UTC**로 변환해서 보내주세요. \n\n - 모든 오류는 메세지를 포함하고 있으며, 타입은 아래와 같이 통일됩니다. \n\n > *{ message: string, resultCode: number, data: null }*",
      "version": "Development",
      "contact": {}
    },
    "tags": [
      {
        "name": "auth",
        "description": ""
      }
    ],
    "servers": [],
    "components": {
      "securitySchemes": {
        "accessToken": {
          "scheme": "Bearer",
          "bearerFormat": "JWT",
          "type": "http",
          "name": "authorization",
          "description": "Bearer accessToken",
          "in": "header"
        }
      },
      "schemas": {
        "InfoPostCategoryFindManyWithInfoPostTypeResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "게시물 타입 아이디",
              "nullable": false
            },
            "value": {
              "type": "string",
              "description": "게시물 타입 값",
              "nullable": false
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            }
          },
          "required": [
            "id",
            "value",
            "createdAt"
          ]
        },
        "InfoPostCategoryFindManyResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "게시물 카테고리 아이디",
              "nullable": false
            },
            "value": {
              "type": "string",
              "description": "게시물 카테고리 값",
              "nullable": false
            },
            "postTypeId": {
              "type": "number",
              "description": "게시물 타입 아이디",
              "nullable": false
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "postType": {
              "description": "게시물 타입",
              "allOf": [
                {
                  "$ref": "#/components/schemas/InfoPostCategoryFindManyWithInfoPostTypeResponseModel"
                }
              ]
            }
          },
          "required": [
            "id",
            "value",
            "postTypeId",
            "createdAt",
            "postType"
          ]
        },
        "InfoPostCategoryFindManyResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/InfoPostCategoryFindManyResponseModel"
              }
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "InfoPostTypeFindManyResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "게시물 타입 아이디",
              "nullable": false
            },
            "value": {
              "type": "string",
              "description": "게시물 타입 값",
              "nullable": false
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            }
          },
          "required": [
            "id",
            "value",
            "createdAt"
          ]
        },
        "InfoPostTypeFindManyResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/InfoPostTypeFindManyResponseModel"
              }
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "TermsManagementCreateDto": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "약관 타입",
              "enum": [
                "PRIVACY_POLICY",
                "TERMS_OF_USE"
              ]
            },
            "url": {
              "type": "string",
              "description": "약관 HTML URL"
            },
            "version": {
              "type": "string",
              "description": "약관 버전"
            }
          },
          "required": [
            "type",
            "url",
            "version"
          ]
        },
        "TermsManagementCreateResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "약관 아이디",
              "nullable": false
            }
          },
          "required": [
            "id"
          ]
        },
        "TermsManagementCreateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/TermsManagementCreateResponseModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "TermsManagementUpdateDto": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "약관 타입",
              "enum": [
                "PRIVACY_POLICY",
                "TERMS_OF_USE"
              ]
            },
            "url": {
              "type": "string",
              "description": "약관 HTML URL"
            },
            "version": {
              "type": "string",
              "description": "약관 버전"
            }
          },
          "required": [
            "type",
            "url",
            "version"
          ]
        },
        "TermsManagementUpdateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "TermsManagementDeleteResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "TermsManagementFindUniqueResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "약관 아이디",
              "nullable": false
            },
            "type": {
              "type": "string",
              "description": "약관 타입",
              "enum": [
                "PRIVACY_POLICY",
                "TERMS_OF_USE"
              ],
              "nullable": false
            },
            "url": {
              "type": "string",
              "description": "약관 HTML URL",
              "nullable": false
            },
            "version": {
              "type": "string",
              "description": "약관 버전",
              "nullable": false
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "type",
            "url",
            "version",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "TermsManagementFindUniqueResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/TermsManagementFindUniqueResponseModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "TermsManagementFindListResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "약관 아이디",
              "nullable": false
            },
            "type": {
              "type": "string",
              "description": "약관 타입",
              "enum": [
                "PRIVACY_POLICY",
                "TERMS_OF_USE"
              ],
              "nullable": false
            },
            "url": {
              "type": "string",
              "description": "약관 HTML URL",
              "nullable": false
            },
            "version": {
              "type": "string",
              "description": "약관 버전",
              "nullable": false
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "type",
            "url",
            "version",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "MetaDataDto": {
          "type": "object",
          "properties": {
            "currentPage": {
              "type": "number",
              "nullable": true
            },
            "currentTake": {
              "type": "number",
              "nullable": true
            },
            "totalPage": {
              "type": "number",
              "nullable": true
            },
            "totalCount": {
              "type": "number"
            }
          },
          "required": [
            "currentPage",
            "currentTake",
            "totalPage",
            "totalCount"
          ]
        },
        "TermsManagementFindListResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/TermsManagementFindListResponseModel"
              }
            },
            "meta": {
              "description": "목록 조회용 메타 데이터",
              "allOf": [
                {
                  "$ref": "#/components/schemas/MetaDataDto"
                }
              ]
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "meta",
            "resultCode",
            "message"
          ]
        },
        "PostCommentManagementCreateDto": {
          "type": "object",
          "properties": {
            "content": {
              "type": "string",
              "description": "내용"
            },
            "state": {
              "type": "string",
              "description": "상태",
              "enum": [
                "ENABLED",
                "DISABLED"
              ]
            },
            "postId": {
              "type": "number",
              "description": "게시물 아이디"
            }
          },
          "required": [
            "content",
            "state",
            "postId"
          ]
        },
        "PostCommentManagementCreateResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "댓글 아이디",
              "nullable": false
            }
          },
          "required": [
            "id"
          ]
        },
        "PostCommentManagementCreateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/PostCommentManagementCreateResponseModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "PostCommentManagementUpdateDto": {
          "type": "object",
          "properties": {
            "content": {
              "type": "string",
              "description": "내용"
            },
            "state": {
              "type": "string",
              "description": "상태",
              "enum": [
                "ENABLED",
                "DISABLED"
              ]
            },
            "postId": {
              "type": "number",
              "description": "게시물 아이디"
            }
          },
          "required": [
            "content",
            "state",
            "postId"
          ]
        },
        "PostCommentManagementUpdateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "PostCommentManagementDeleteResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "PostCommentManagementFindUniqueWithUserResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "유저 아이디",
              "nullable": false
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": true
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "nickname",
            "profileImageUrl",
            "deletedAt"
          ]
        },
        "PostCommentManagementFindUniqueWithAdminResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "관리자 아이디",
              "nullable": false
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": false
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "nickname",
            "profileImageUrl",
            "deletedAt"
          ]
        },
        "PostCommentManagementFindUniqueResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "댓글 아이디",
              "nullable": false
            },
            "content": {
              "type": "string",
              "description": "내용",
              "nullable": false
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED"
              ],
              "nullable": false
            },
            "postId": {
              "type": "number",
              "description": "게시물 아이디",
              "nullable": false
            },
            "userId": {
              "type": "number",
              "description": "댓글 작성자 아이디",
              "nullable": true
            },
            "adminId": {
              "type": "number",
              "description": "관리자 아이디",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            },
            "user": {
              "nullable": true,
              "description": "작성자 정보",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostCommentManagementFindUniqueWithUserResponseModel"
                }
              ]
            },
            "admin": {
              "nullable": true,
              "description": "작성자 정보",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostCommentManagementFindUniqueWithAdminResponseModel"
                }
              ]
            }
          },
          "required": [
            "id",
            "content",
            "state",
            "postId",
            "userId",
            "adminId",
            "createdAt",
            "updatedAt",
            "deletedAt",
            "user",
            "admin"
          ]
        },
        "PostCommentManagementFindUniqueResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/PostCommentManagementFindUniqueResponseModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "PostCommentManagementFindListWithUserResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "유저 아이디",
              "nullable": false
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": true
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "nickname",
            "profileImageUrl",
            "deletedAt"
          ]
        },
        "PostCommentManagementFindListWithAdminResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "관리자 아이디",
              "nullable": false
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": false
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "nickname",
            "profileImageUrl",
            "deletedAt"
          ]
        },
        "PostCommentManagementFindListResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "댓글 아이디",
              "nullable": false
            },
            "content": {
              "type": "string",
              "description": "내용",
              "nullable": false
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED"
              ],
              "nullable": false
            },
            "postId": {
              "type": "number",
              "description": "게시물 아이디",
              "nullable": false
            },
            "userId": {
              "type": "number",
              "description": "댓글 작성자 아이디",
              "nullable": true
            },
            "adminId": {
              "type": "number",
              "description": "관리자 아이디",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            },
            "user": {
              "nullable": true,
              "description": "작성자 정보",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostCommentManagementFindListWithUserResponseModel"
                }
              ]
            },
            "admin": {
              "nullable": true,
              "description": "작성자 정보",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostCommentManagementFindListWithAdminResponseModel"
                }
              ]
            }
          },
          "required": [
            "id",
            "content",
            "state",
            "postId",
            "userId",
            "adminId",
            "createdAt",
            "updatedAt",
            "deletedAt",
            "user",
            "admin"
          ]
        },
        "PostCommentManagementFindListResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/PostCommentManagementFindListResponseModel"
              }
            },
            "meta": {
              "description": "목록 조회용 메타 데이터",
              "allOf": [
                {
                  "$ref": "#/components/schemas/MetaDataDto"
                }
              ]
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "meta",
            "resultCode",
            "message"
          ]
        },
        "PostManagementCreateDto": {
          "type": "object",
          "properties": {
            "postTypeId": {
              "type": "number",
              "description": "게시물 타입"
            },
            "postCategoryId": {
              "type": "number",
              "description": "게시물 카테고리"
            },
            "isTop": {
              "type": "boolean",
              "description": "상단 고정 여부"
            },
            "isSecret": {
              "type": "boolean",
              "description": "비밀글 여부 (작성자와 관리자만 볼 수 있음"
            },
            "isComment": {
              "type": "boolean",
              "description": "댓글 여부"
            },
            "title": {
              "type": "string",
              "description": "제목"
            },
            "content": {
              "type": "string",
              "description": "내용"
            },
            "images": {
              "description": "이미지 업로드",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "files": {
              "description": "첨부파일 업로드",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED"
              ]
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 url"
            }
          },
          "required": [
            "postTypeId",
            "title",
            "content"
          ]
        },
        "PostManagementCreateResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "게시물 아이디",
              "nullable": false
            }
          },
          "required": [
            "id"
          ]
        },
        "PostManagementCreateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/PostManagementCreateResponseModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "PostManagementUpdateDto": {
          "type": "object",
          "properties": {
            "postTypeId": {
              "type": "number",
              "description": "게시물 타입"
            },
            "postCategoryId": {
              "type": "number",
              "description": "게시물 카테고리"
            },
            "isTop": {
              "type": "boolean",
              "description": "상단 고정 여부"
            },
            "isSecret": {
              "type": "boolean",
              "description": "비밀글 여부 (작성자와 관리자만 볼 수 있음"
            },
            "isComment": {
              "type": "boolean",
              "description": "댓글 여부"
            },
            "title": {
              "type": "string",
              "description": "제목"
            },
            "content": {
              "type": "string",
              "description": "내용"
            },
            "images": {
              "description": "이미지 업로드",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "files": {
              "description": "첨부파일 업로드",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED"
              ]
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 url"
            }
          }
        },
        "PostManagementUpdateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "PostManagementDeleteResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "PostManagementFindUniqueWithUserResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "유저 아이디",
              "nullable": false
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": true
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "nickname",
            "profileImageUrl",
            "deletedAt"
          ]
        },
        "PostManagementFindUniqueWithAdminResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "관리자 아이디",
              "nullable": false
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": false
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "nickname",
            "profileImageUrl",
            "deletedAt"
          ]
        },
        "PostManagementFindUniqueWithGuestResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "게스트 아이디",
              "nullable": false
            },
            "name": {
              "type": "string",
              "description": "이름",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "name",
            "deletedAt"
          ]
        },
        "PostManagementFindUniqueWithPostTypeResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "게시물 타입 아이디",
              "nullable": false
            },
            "value": {
              "type": "string",
              "description": "게시물 타입 값",
              "nullable": false
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            }
          },
          "required": [
            "id",
            "value",
            "createdAt"
          ]
        },
        "PostManagementFindUniqueWithPostCategoryResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "게시물 카테고리 아이디",
              "nullable": false
            },
            "value": {
              "type": "string",
              "description": "게시물 카테고리 값",
              "nullable": false
            },
            "postTypeId": {
              "type": "number",
              "description": "게시물 타입 아이디",
              "nullable": false
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            }
          },
          "required": [
            "id",
            "value",
            "postTypeId",
            "createdAt"
          ]
        },
        "PostManagementFindUniqueResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "게시물 아이디",
              "nullable": false
            },
            "isTop": {
              "type": "boolean",
              "description": "상단 고정 여부",
              "nullable": false
            },
            "isSecret": {
              "type": "boolean",
              "description": "비밀글 여부 (작성자만 볼 수 있음)",
              "nullable": false
            },
            "isComment": {
              "type": "boolean",
              "description": "댓글 여부",
              "nullable": false
            },
            "viewCount": {
              "type": "number",
              "description": "조회수",
              "nullable": false
            },
            "likeCount": {
              "type": "number",
              "description": "좋아요 수",
              "nullable": false
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 url",
              "nullable": true
            },
            "title": {
              "type": "string",
              "description": "제목",
              "nullable": false
            },
            "content": {
              "type": "string",
              "description": "내용",
              "nullable": false
            },
            "images": {
              "description": "이미지 url",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "files": {
              "description": "첨부파일 url",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED"
              ],
              "nullable": false
            },
            "userId": {
              "type": "number",
              "description": "작성자(유저) 아이디",
              "nullable": true
            },
            "adminId": {
              "type": "number",
              "description": "작성자(관리자) 아이디",
              "nullable": true
            },
            "postTypeId": {
              "type": "number",
              "description": "게시물 타입 아이디",
              "nullable": false
            },
            "postCategoryId": {
              "type": "number",
              "description": "게시물 카테고리 아이디",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            },
            "user": {
              "nullable": true,
              "description": "작성자 정보",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostManagementFindUniqueWithUserResponseModel"
                }
              ]
            },
            "admin": {
              "nullable": true,
              "description": "작성자 정보",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostManagementFindUniqueWithAdminResponseModel"
                }
              ]
            },
            "guest": {
              "nullable": true,
              "description": "작성자 정보",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostManagementFindUniqueWithGuestResponseModel"
                }
              ]
            },
            "postType": {
              "description": "게시물 타입",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostManagementFindUniqueWithPostTypeResponseModel"
                }
              ]
            },
            "postCategory": {
              "nullable": true,
              "description": "게시물 카테고리",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostManagementFindUniqueWithPostCategoryResponseModel"
                }
              ]
            }
          },
          "required": [
            "id",
            "isTop",
            "isSecret",
            "isComment",
            "viewCount",
            "likeCount",
            "thumbnail",
            "title",
            "content",
            "images",
            "files",
            "state",
            "userId",
            "adminId",
            "postTypeId",
            "postCategoryId",
            "createdAt",
            "updatedAt",
            "deletedAt",
            "user",
            "admin",
            "guest",
            "postType",
            "postCategory"
          ]
        },
        "PostManagementFindUniqueResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/PostManagementFindUniqueResponseModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "PostManagementFindListWithUserResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "유저 아이디",
              "nullable": false
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": true
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "nickname",
            "profileImageUrl",
            "deletedAt"
          ]
        },
        "PostManagementFindListWithAdminResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "관리자 아이디",
              "nullable": false
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": false
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "nickname",
            "profileImageUrl",
            "deletedAt"
          ]
        },
        "PostManagementFindListWithGuestResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "게스트 아이디",
              "nullable": false
            },
            "name": {
              "type": "string",
              "description": "이름",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "name",
            "deletedAt"
          ]
        },
        "PostManagementFindListWithPostTypeResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "게시물 타입 아이디",
              "nullable": false
            },
            "value": {
              "type": "string",
              "description": "게시물 타입 값",
              "nullable": false
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            }
          },
          "required": [
            "id",
            "value",
            "createdAt"
          ]
        },
        "PostManagementFindListWithPostCategoryResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "게시물 카테고리 아이디",
              "nullable": false
            },
            "value": {
              "type": "string",
              "description": "게시물 카테고리 값",
              "nullable": false
            },
            "postTypeId": {
              "type": "number",
              "description": "게시물 타입 아이디",
              "nullable": false
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            }
          },
          "required": [
            "id",
            "value",
            "postTypeId",
            "createdAt"
          ]
        },
        "PostManagementFindListWithCountResponseModel": {
          "type": "object",
          "properties": {
            "postComments": {
              "type": "number",
              "description": "댓글 수"
            }
          },
          "required": [
            "postComments"
          ]
        },
        "PostManagementFindListResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "게시물 아이디",
              "nullable": false
            },
            "isTop": {
              "type": "boolean",
              "description": "상단 고정 여부",
              "nullable": false
            },
            "isSecret": {
              "type": "boolean",
              "description": "비밀글 여부 (작성자만 볼 수 있음)",
              "nullable": false
            },
            "isComment": {
              "type": "boolean",
              "description": "댓글 여부",
              "nullable": false
            },
            "viewCount": {
              "type": "number",
              "description": "조회수",
              "nullable": false
            },
            "likeCount": {
              "type": "number",
              "description": "좋아요 수",
              "nullable": false
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 url",
              "nullable": true
            },
            "title": {
              "type": "string",
              "description": "제목",
              "nullable": false
            },
            "images": {
              "description": "이미지 url",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "files": {
              "description": "첨부파일 url",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED"
              ],
              "nullable": false
            },
            "userId": {
              "type": "number",
              "description": "작성자(유저) 아이디",
              "nullable": true
            },
            "adminId": {
              "type": "number",
              "description": "작성자(관리자) 아이디",
              "nullable": true
            },
            "postTypeId": {
              "type": "number",
              "description": "게시물 타입 아이디",
              "nullable": false
            },
            "postCategoryId": {
              "type": "number",
              "description": "게시물 카테고리 아이디",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            },
            "user": {
              "nullable": true,
              "description": "작성자 정보",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostManagementFindListWithUserResponseModel"
                }
              ]
            },
            "admin": {
              "nullable": true,
              "description": "작성자 정보",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostManagementFindListWithAdminResponseModel"
                }
              ]
            },
            "guest": {
              "nullable": true,
              "description": "작성자 정보",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostManagementFindListWithGuestResponseModel"
                }
              ]
            },
            "postType": {
              "description": "게시물 타입",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostManagementFindListWithPostTypeResponseModel"
                }
              ]
            },
            "postCategory": {
              "nullable": true,
              "description": "게시물 카테고리",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostManagementFindListWithPostCategoryResponseModel"
                }
              ]
            },
            "_count": {
              "description": "카운트 수",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostManagementFindListWithCountResponseModel"
                }
              ]
            }
          },
          "required": [
            "id",
            "isTop",
            "isSecret",
            "isComment",
            "viewCount",
            "likeCount",
            "thumbnail",
            "title",
            "images",
            "files",
            "state",
            "userId",
            "adminId",
            "postTypeId",
            "postCategoryId",
            "createdAt",
            "updatedAt",
            "deletedAt",
            "user",
            "admin",
            "guest",
            "postType",
            "postCategory",
            "_count"
          ]
        },
        "PostManagementFindListResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/PostManagementFindListResponseModel"
              }
            },
            "meta": {
              "description": "목록 조회용 메타 데이터",
              "allOf": [
                {
                  "$ref": "#/components/schemas/MetaDataDto"
                }
              ]
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "meta",
            "resultCode",
            "message"
          ]
        },
        "UserManagementCreateDto": {
          "type": "object",
          "properties": {
            "loginId": {
              "type": "string",
              "description": "로그인 아이디"
            },
            "password": {
              "type": "string",
              "description": "비밀번호"
            },
            "nickname": {
              "type": "string",
              "description": "닉네임"
            },
            "email": {
              "type": "string",
              "description": "이메일"
            },
            "phoneNumber": {
              "type": "string",
              "description": "전화번호"
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url"
            },
            "role": {
              "type": "string",
              "description": "유저 권한",
              "enum": [
                "SOCIAL_GUEST",
                "USER"
              ]
            },
            "os": {
              "type": "string",
              "description": "운영체제",
              "enum": [
                "IOS",
                "ANDROID",
                "WEB"
              ]
            },
            "hardwareVersion": {
              "type": "string",
              "description": "하드웨어 버전 (App 필수)"
            },
            "softwareVersion": {
              "type": "string",
              "description": "소프트웨어 버전 (App 필수)"
            },
            "userDeviceToken": {
              "type": "string",
              "description": "유저 기기 토큰 (App 필수)"
            },
            "isAgreedTermsOfService": {
              "type": "boolean",
              "description": "개인정보수집 및 이용 동의 유무"
            },
            "isAlarmSettings": {
              "type": "boolean",
              "description": "알람 수신 여부"
            }
          },
          "required": [
            "loginId",
            "password",
            "nickname",
            "email",
            "phoneNumber",
            "profileImageUrl",
            "role",
            "os",
            "hardwareVersion",
            "softwareVersion",
            "userDeviceToken",
            "isAgreedTermsOfService",
            "isAlarmSettings"
          ]
        },
        "UserManagementCreateResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "유저 아이디",
              "nullable": false
            }
          },
          "required": [
            "id"
          ]
        },
        "UserManagementCreateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/UserManagementCreateResponseModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "UserManagementUpdateDto": {
          "type": "object",
          "properties": {
            "password": {
              "type": "string",
              "description": "비밀번호"
            },
            "nickname": {
              "type": "string",
              "description": "닉네임"
            },
            "email": {
              "type": "string",
              "description": "이메일"
            },
            "phoneNumber": {
              "type": "string",
              "description": "전화번호"
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url"
            },
            "role": {
              "type": "string",
              "description": "유저 권한",
              "enum": [
                "SOCIAL_GUEST",
                "USER"
              ]
            },
            "isAlarmSettings": {
              "type": "boolean",
              "description": "알람 수신 여부"
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED"
              ]
            }
          },
          "required": [
            "password",
            "nickname",
            "email",
            "phoneNumber",
            "profileImageUrl",
            "role",
            "isAlarmSettings",
            "state"
          ]
        },
        "UserManagementUpdateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "UserManagementDeleteResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "UserManagementFindUniqueResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "유저 아이디",
              "nullable": false
            },
            "oAuthId": {
              "type": "string",
              "description": "소셜 아이디",
              "nullable": true
            },
            "loginId": {
              "type": "string",
              "description": "로그인 아이디",
              "nullable": true
            },
            "name": {
              "type": "string",
              "description": "담당자 명",
              "nullable": true
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": true
            },
            "email": {
              "type": "string",
              "description": "이메일",
              "nullable": true
            },
            "phoneNumber": {
              "type": "string",
              "description": "전화번호",
              "nullable": true
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "type": {
              "type": "string",
              "description": "로그인 타입",
              "enum": [
                "DEFAULT",
                "KAKAO",
                "GOOGLE",
                "NAVER",
                "APPLE"
              ],
              "nullable": false
            },
            "role": {
              "type": "string",
              "description": "유저 권한",
              "enum": [
                "SOCIAL_GUEST",
                "USER"
              ],
              "nullable": false
            },
            "os": {
              "type": "string",
              "description": "운영체제",
              "enum": [
                "IOS",
                "ANDROID",
                "WEB"
              ],
              "nullable": true
            },
            "isAgreedTermsOfService": {
              "type": "boolean",
              "description": "개인정보수집 및 이용 동의 유무",
              "nullable": true
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED",
                "PENDING"
              ],
              "nullable": false
            },
            "joinType": {
              "type": "string",
              "description": "가입 타입",
              "enum": [
                "CONNECT",
                "CREATE"
              ],
              "nullable": true
            },
            "storeId": {
              "type": "number",
              "description": "상점 아이디",
              "nullable": true
            },
            "lastLoginAt": {
              "format": "date-time",
              "type": "string",
              "description": "최근 로그인 일자",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "oAuthId",
            "loginId",
            "name",
            "nickname",
            "email",
            "phoneNumber",
            "profileImageUrl",
            "type",
            "role",
            "os",
            "isAgreedTermsOfService",
            "state",
            "joinType",
            "storeId",
            "lastLoginAt",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "UserManagementFindUniqueResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/UserManagementFindUniqueResponseModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "UserManagementFindListResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "유저 아이디",
              "nullable": false
            },
            "oAuthId": {
              "type": "string",
              "description": "소셜 아이디",
              "nullable": true
            },
            "loginId": {
              "type": "string",
              "description": "로그인 아이디",
              "nullable": true
            },
            "name": {
              "type": "string",
              "description": "담당자 명",
              "nullable": true
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": true
            },
            "email": {
              "type": "string",
              "description": "이메일",
              "nullable": true
            },
            "phoneNumber": {
              "type": "string",
              "description": "전화번호",
              "nullable": true
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "type": {
              "type": "string",
              "description": "로그인 타입",
              "enum": [
                "DEFAULT",
                "KAKAO",
                "GOOGLE",
                "NAVER",
                "APPLE"
              ],
              "nullable": false
            },
            "role": {
              "type": "string",
              "description": "유저 권한",
              "enum": [
                "SOCIAL_GUEST",
                "USER"
              ],
              "nullable": false
            },
            "os": {
              "type": "string",
              "description": "운영체제",
              "enum": [
                "IOS",
                "ANDROID",
                "WEB"
              ],
              "nullable": true
            },
            "isAgreedTermsOfService": {
              "type": "boolean",
              "description": "개인정보수집 및 이용 동의 유무",
              "nullable": true
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED",
                "PENDING"
              ],
              "nullable": false
            },
            "joinType": {
              "type": "string",
              "description": "가입 타입",
              "enum": [
                "CONNECT",
                "CREATE"
              ],
              "nullable": true
            },
            "storeId": {
              "type": "number",
              "description": "상점 아이디",
              "nullable": true
            },
            "lastLoginAt": {
              "format": "date-time",
              "type": "string",
              "description": "최근 로그인 일자",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "oAuthId",
            "loginId",
            "name",
            "nickname",
            "email",
            "phoneNumber",
            "profileImageUrl",
            "type",
            "role",
            "os",
            "isAgreedTermsOfService",
            "state",
            "joinType",
            "storeId",
            "lastLoginAt",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "UserManagementFindListResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/UserManagementFindListResponseModel"
              }
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "UserManagementDuplicateLoginIdCheckResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "boolean"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "UserManagementDuplicateNicknameCheckResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "boolean"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "AdminManagementCreateDto": {
          "type": "object",
          "properties": {
            "role": {
              "type": "string",
              "description": "관리자 권한",
              "enum": [
                "SUPER_ADMIN",
                "ADMIN"
              ]
            },
            "loginId": {
              "type": "string",
              "description": "로그인 아이디"
            },
            "password": {
              "type": "string",
              "description": "비밀번호"
            },
            "nickname": {
              "type": "string",
              "description": "닉네임"
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED"
              ]
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url"
            }
          },
          "required": [
            "role",
            "loginId",
            "password",
            "nickname",
            "state",
            "profileImageUrl"
          ]
        },
        "AdminManagementCreateResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "관리자 아이디",
              "nullable": false
            }
          },
          "required": [
            "id"
          ]
        },
        "AdminManagementCreateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/AdminManagementCreateResponseModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "AdminManagementUpdatePasswordDto": {
          "type": "object",
          "properties": {
            "currentPassword": {
              "type": "string",
              "description": "현재 비밀번호"
            },
            "newPassword": {
              "type": "string",
              "description": "새 비밀번호"
            }
          },
          "required": [
            "currentPassword",
            "newPassword"
          ]
        },
        "AdminManagementUpdatePasswordResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "AdminManagementUpdateDto": {
          "type": "object",
          "properties": {
            "role": {
              "type": "string",
              "description": "관리자 권한",
              "enum": [
                "SUPER_ADMIN",
                "ADMIN"
              ]
            },
            "loginId": {
              "type": "string",
              "description": "로그인 아이디"
            },
            "password": {
              "type": "string",
              "description": "비밀번호"
            },
            "nickname": {
              "type": "string",
              "description": "닉네임"
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED"
              ]
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url"
            }
          },
          "required": [
            "role",
            "loginId",
            "password",
            "nickname",
            "state",
            "profileImageUrl"
          ]
        },
        "AdminManagementUpdateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "AdminManagementDeleteResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "AdminManagementFindUniqueResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "관리자 아이디",
              "nullable": false
            },
            "role": {
              "type": "string",
              "description": "관리자 권한",
              "enum": [
                "SUPER_ADMIN",
                "ADMIN"
              ],
              "nullable": false
            },
            "loginId": {
              "type": "string",
              "description": "로그인 아이디",
              "nullable": false
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": false
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED"
              ],
              "nullable": false
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "lastLoginAt": {
              "format": "date-time",
              "type": "string",
              "description": "최근 로그인 일자",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "role",
            "loginId",
            "nickname",
            "state",
            "profileImageUrl",
            "lastLoginAt",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "AdminManagementFindUniqueResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/AdminManagementFindUniqueResponseModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "AdminManagementFindListResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "관리자 아이디",
              "nullable": false
            },
            "role": {
              "type": "string",
              "description": "관리자 권한",
              "enum": [
                "SUPER_ADMIN",
                "ADMIN"
              ],
              "nullable": false
            },
            "loginId": {
              "type": "string",
              "description": "로그인 아이디",
              "nullable": false
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": false
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED"
              ],
              "nullable": false
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "lastLoginAt": {
              "format": "date-time",
              "type": "string",
              "description": "최근 로그인 일자",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "role",
            "loginId",
            "nickname",
            "state",
            "profileImageUrl",
            "lastLoginAt",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "AdminManagementFindListResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AdminManagementFindListResponseModel"
              }
            },
            "meta": {
              "description": "목록 조회용 메타 데이터",
              "allOf": [
                {
                  "$ref": "#/components/schemas/MetaDataDto"
                }
              ]
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "meta",
            "resultCode",
            "message"
          ]
        },
        "StoreManagementCreateDto": {
          "type": "object",
          "properties": {
            "storeId": {
              "type": "number",
              "description": "상점 고유 아아디",
              "nullable": true
            },
            "crawlerUrl": {
              "type": "string",
              "description": "크롤링 URL",
              "nullable": true
            },
            "name": {
              "type": "string",
              "description": "상점명",
              "nullable": false
            },
            "businessType": {
              "type": "string",
              "description": "비지니스 타입",
              "enum": [
                "SMALL_BUSINESS",
                "FRANCHISE"
              ],
              "nullable": false
            },
            "address": {
              "type": "string",
              "description": "주소",
              "nullable": true
            },
            "phone": {
              "type": "string",
              "description": "전화번호",
              "nullable": true
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 url",
              "nullable": true
            },
            "snsLinks": {
              "description": "SNS 링크",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "images": {
              "description": "이미지 url",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "content": {
              "type": "string",
              "description": "소개",
              "nullable": true
            },
            "reviewImages": {
              "description": "리뷰 이미지",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "merchantNumber": {
              "type": "string",
              "description": "사업자 번호",
              "nullable": true
            },
            "latitude": {
              "type": "number",
              "description": "위도",
              "enum": [],
              "nullable": true
            },
            "longitude": {
              "type": "number",
              "description": "경도",
              "enum": [],
              "nullable": true
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED"
              ],
              "nullable": false
            },
            "temperature": {
              "type": "string",
              "description": "협업 온도",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "storeId",
            "crawlerUrl",
            "name",
            "businessType",
            "address",
            "phone",
            "thumbnail",
            "snsLinks",
            "images",
            "content",
            "reviewImages",
            "merchantNumber",
            "latitude",
            "longitude",
            "state",
            "temperature",
            "createdAt",
            "deletedAt"
          ]
        },
        "StoreManagementCreateModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 아이디",
              "nullable": false
            }
          },
          "required": [
            "id"
          ]
        },
        "StoreManagementCreateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/StoreManagementCreateModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "StoreManagementUpdateDto": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 아이디",
              "nullable": false
            },
            "storeId": {
              "type": "number",
              "description": "상점 고유 아아디",
              "nullable": true
            },
            "crawlerUrl": {
              "type": "string",
              "description": "크롤링 URL",
              "nullable": true
            },
            "name": {
              "type": "string",
              "description": "상점명",
              "nullable": false
            },
            "businessType": {
              "type": "string",
              "description": "비지니스 타입",
              "enum": [
                "SMALL_BUSINESS",
                "FRANCHISE"
              ],
              "nullable": false
            },
            "address": {
              "type": "string",
              "description": "주소",
              "nullable": true
            },
            "phone": {
              "type": "string",
              "description": "전화번호",
              "nullable": true
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 url",
              "nullable": true
            },
            "snsLinks": {
              "description": "SNS 링크",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "images": {
              "description": "이미지 url",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "content": {
              "type": "string",
              "description": "소개",
              "nullable": true
            },
            "reviewImages": {
              "description": "리뷰 이미지",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "merchantNumber": {
              "type": "string",
              "description": "사업자 번호",
              "nullable": true
            },
            "latitude": {
              "type": "number",
              "description": "위도",
              "enum": [],
              "nullable": true
            },
            "longitude": {
              "type": "number",
              "description": "경도",
              "enum": [],
              "nullable": true
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED"
              ],
              "nullable": false
            },
            "temperature": {
              "type": "string",
              "description": "협업 온도",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          }
        },
        "StoreManagementUpdateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "StoreManagementDeleteResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "StoreManagementFindUniqueWithUserModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "유저 아이디",
              "nullable": false
            },
            "email": {
              "type": "string",
              "description": "이메일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "email"
          ]
        },
        "StoreManagementFindUniqueInfoStoreReviewKeyword": {
          "type": "object",
          "properties": {
            "value": {
              "type": "string"
            }
          },
          "required": [
            "value"
          ]
        },
        "StoreManagementFindUniqueWithStoreOnReviewModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 리뷰 아이디",
              "nullable": false
            },
            "count": {
              "type": "number",
              "description": "숫자 (리뷰 카운트 등)",
              "nullable": true
            },
            "infoStoreReviewKeyword": {
              "$ref": "#/components/schemas/StoreManagementFindUniqueInfoStoreReviewKeyword"
            }
          },
          "required": [
            "id",
            "count",
            "infoStoreReviewKeyword"
          ]
        },
        "StoreManagementFindUniqueWithInfoStoreCategoryModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 카테고리 아이디",
              "nullable": false
            },
            "value": {
              "type": "string",
              "description": "상점 카테고리 값",
              "nullable": false
            }
          },
          "required": [
            "id",
            "value"
          ]
        },
        "StoreManagementFindUniqueModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 아이디",
              "nullable": false
            },
            "storeId": {
              "type": "number",
              "description": "상점 고유 아아디",
              "nullable": true
            },
            "crawlerUrl": {
              "type": "string",
              "description": "크롤링 URL",
              "nullable": true
            },
            "name": {
              "type": "string",
              "description": "상점명",
              "nullable": false
            },
            "businessType": {
              "type": "string",
              "description": "비지니스 타입",
              "enum": [
                "SMALL_BUSINESS",
                "FRANCHISE"
              ],
              "nullable": false
            },
            "address": {
              "type": "string",
              "description": "주소",
              "nullable": true
            },
            "phone": {
              "type": "string",
              "description": "전화번호",
              "nullable": true
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 url",
              "nullable": true
            },
            "snsLinks": {
              "description": "SNS 링크",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "images": {
              "description": "이미지 url",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "content": {
              "type": "string",
              "description": "소개",
              "nullable": true
            },
            "reviewImages": {
              "description": "리뷰 이미지",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "merchantNumber": {
              "type": "string",
              "description": "사업자 번호",
              "nullable": true
            },
            "latitude": {
              "type": "number",
              "description": "위도",
              "enum": [],
              "nullable": true
            },
            "longitude": {
              "type": "number",
              "description": "경도",
              "enum": [],
              "nullable": true
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED"
              ],
              "nullable": false
            },
            "temperature": {
              "type": "string",
              "description": "협업 온도",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            },
            "user": {
              "nullable": true,
              "description": "유저",
              "allOf": [
                {
                  "$ref": "#/components/schemas/StoreManagementFindUniqueWithUserModel"
                }
              ]
            },
            "storeOnReview": {
              "description": "리뷰 카테고리",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/StoreManagementFindUniqueWithStoreOnReviewModel"
              }
            },
            "infoStoreCategory": {
              "description": "카테고리",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/StoreManagementFindUniqueWithInfoStoreCategoryModel"
              }
            }
          },
          "required": [
            "id",
            "storeId",
            "crawlerUrl",
            "name",
            "businessType",
            "address",
            "phone",
            "thumbnail",
            "snsLinks",
            "images",
            "content",
            "reviewImages",
            "merchantNumber",
            "latitude",
            "longitude",
            "state",
            "temperature",
            "createdAt",
            "updatedAt",
            "deletedAt",
            "user",
            "storeOnReview",
            "infoStoreCategory"
          ]
        },
        "StoreManagementFindUniqueResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/StoreManagementFindUniqueModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "StoreManagementFindListWithUserModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "유저 아이디",
              "nullable": false
            },
            "email": {
              "type": "string",
              "description": "이메일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "email"
          ]
        },
        "StoreManagementFindListInfoStoreReviewKeyword": {
          "type": "object",
          "properties": {
            "value": {
              "type": "string"
            }
          },
          "required": [
            "value"
          ]
        },
        "StoreManagementFindListWithStoreOnReviewModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 리뷰 아이디",
              "nullable": false
            },
            "count": {
              "type": "number",
              "description": "숫자 (리뷰 카운트 등)",
              "nullable": true
            },
            "infoStoreReviewKeyword": {
              "$ref": "#/components/schemas/StoreManagementFindListInfoStoreReviewKeyword"
            }
          },
          "required": [
            "id",
            "count",
            "infoStoreReviewKeyword"
          ]
        },
        "StoreManagementFindListWithInfoStoreCategoryModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 카테고리 아이디",
              "nullable": false
            },
            "value": {
              "type": "string",
              "description": "상점 카테고리 값",
              "nullable": false
            }
          },
          "required": [
            "id",
            "value"
          ]
        },
        "StoreManagementFindListModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 아이디",
              "nullable": false
            },
            "storeId": {
              "type": "number",
              "description": "상점 고유 아아디",
              "nullable": true
            },
            "crawlerUrl": {
              "type": "string",
              "description": "크롤링 URL",
              "nullable": true
            },
            "name": {
              "type": "string",
              "description": "상점명",
              "nullable": false
            },
            "businessType": {
              "type": "string",
              "description": "비지니스 타입",
              "enum": [
                "SMALL_BUSINESS",
                "FRANCHISE"
              ],
              "nullable": false
            },
            "address": {
              "type": "string",
              "description": "주소",
              "nullable": true
            },
            "phone": {
              "type": "string",
              "description": "전화번호",
              "nullable": true
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 url",
              "nullable": true
            },
            "snsLinks": {
              "description": "SNS 링크",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "images": {
              "description": "이미지 url",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "content": {
              "type": "string",
              "description": "소개",
              "nullable": true
            },
            "reviewImages": {
              "description": "리뷰 이미지",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "merchantNumber": {
              "type": "string",
              "description": "사업자 번호",
              "nullable": true
            },
            "latitude": {
              "type": "number",
              "description": "위도",
              "enum": [],
              "nullable": true
            },
            "longitude": {
              "type": "number",
              "description": "경도",
              "enum": [],
              "nullable": true
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED"
              ],
              "nullable": false
            },
            "temperature": {
              "type": "string",
              "description": "협업 온도",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            },
            "user": {
              "nullable": true,
              "description": "유저",
              "allOf": [
                {
                  "$ref": "#/components/schemas/StoreManagementFindListWithUserModel"
                }
              ]
            },
            "storeOnReview": {
              "description": "리뷰 카테고리",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/StoreManagementFindListWithStoreOnReviewModel"
              }
            },
            "infoStoreCategory": {
              "description": "카테고리",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/StoreManagementFindListWithInfoStoreCategoryModel"
              }
            }
          },
          "required": [
            "id",
            "storeId",
            "crawlerUrl",
            "name",
            "businessType",
            "address",
            "phone",
            "thumbnail",
            "snsLinks",
            "images",
            "content",
            "reviewImages",
            "merchantNumber",
            "latitude",
            "longitude",
            "state",
            "temperature",
            "createdAt",
            "updatedAt",
            "deletedAt",
            "user",
            "storeOnReview",
            "infoStoreCategory"
          ]
        },
        "StoreManagementFindListResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/StoreManagementFindListModel"
              }
            },
            "meta": {
              "description": "목록 조회용 메타 데이터",
              "allOf": [
                {
                  "$ref": "#/components/schemas/MetaDataDto"
                }
              ]
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "meta",
            "resultCode",
            "message"
          ]
        },
        "ChatRoomManagementCreateDto": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "채팅 타입",
              "enum": [
                "PERSONAL",
                "GROUP"
              ],
              "nullable": false
            },
            "agreementsRequestId": {
              "type": "number",
              "description": "협업 요청 아이디",
              "enum": [],
              "nullable": false
            }
          },
          "required": [
            "type",
            "agreementsRequestId"
          ]
        },
        "ChatRoomManagementCreateModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "채팅방 아이디",
              "nullable": false
            }
          },
          "required": [
            "id"
          ]
        },
        "ChatRoomManagementCreateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ChatRoomManagementCreateModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "ChatRoomManagementUpdateDto": {
          "type": "object",
          "properties": {}
        },
        "ChatRoomManagementUpdateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "ChatRoomManagementDeleteResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "ChatRoomManagementFindUniqueWithChatMemberStoreModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 아이디",
              "nullable": false
            },
            "storeId": {
              "type": "number",
              "description": "상점 고유 아아디",
              "nullable": true
            },
            "crawlerUrl": {
              "type": "string",
              "description": "크롤링 URL",
              "nullable": true
            },
            "name": {
              "type": "string",
              "description": "상점명",
              "nullable": false
            },
            "businessType": {
              "type": "string",
              "description": "비지니스 타입",
              "enum": [
                "SMALL_BUSINESS",
                "FRANCHISE"
              ],
              "nullable": false
            },
            "address": {
              "type": "string",
              "description": "주소",
              "nullable": true
            },
            "phone": {
              "type": "string",
              "description": "전화번호",
              "nullable": true
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 url",
              "nullable": true
            },
            "snsLinks": {
              "description": "SNS 링크",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "images": {
              "description": "이미지 url",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "content": {
              "type": "string",
              "description": "소개",
              "nullable": true
            },
            "reviewImages": {
              "description": "리뷰 이미지",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "merchantNumber": {
              "type": "string",
              "description": "사업자 번호",
              "nullable": true
            },
            "latitude": {
              "type": "number",
              "description": "위도",
              "enum": [],
              "nullable": true
            },
            "longitude": {
              "type": "number",
              "description": "경도",
              "enum": [],
              "nullable": true
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED"
              ],
              "nullable": false
            },
            "temperature": {
              "type": "string",
              "description": "협업 온도",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "storeId",
            "crawlerUrl",
            "name",
            "businessType",
            "address",
            "phone",
            "thumbnail",
            "snsLinks",
            "images",
            "content",
            "reviewImages",
            "merchantNumber",
            "latitude",
            "longitude",
            "state",
            "temperature",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "ChatRoomManagementFindUniqueWithChatMemberUserModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "유저 아이디",
              "nullable": false
            },
            "oAuthId": {
              "type": "string",
              "description": "소셜 아이디",
              "nullable": true
            },
            "loginId": {
              "type": "string",
              "description": "로그인 아이디",
              "nullable": true
            },
            "name": {
              "type": "string",
              "description": "담당자 명",
              "nullable": true
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": true
            },
            "email": {
              "type": "string",
              "description": "이메일",
              "nullable": true
            },
            "phoneNumber": {
              "type": "string",
              "description": "전화번호",
              "nullable": true
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "type": {
              "type": "string",
              "description": "로그인 타입",
              "enum": [
                "DEFAULT",
                "KAKAO",
                "GOOGLE",
                "NAVER",
                "APPLE"
              ],
              "nullable": false
            },
            "role": {
              "type": "string",
              "description": "유저 권한",
              "enum": [
                "SOCIAL_GUEST",
                "USER"
              ],
              "nullable": false
            },
            "os": {
              "type": "string",
              "description": "운영체제",
              "enum": [
                "IOS",
                "ANDROID",
                "WEB"
              ],
              "nullable": true
            },
            "isAgreedTermsOfService": {
              "type": "boolean",
              "description": "개인정보수집 및 이용 동의 유무",
              "nullable": true
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED",
                "PENDING"
              ],
              "nullable": false
            },
            "joinType": {
              "type": "string",
              "description": "가입 타입",
              "enum": [
                "CONNECT",
                "CREATE"
              ],
              "nullable": true
            },
            "storeId": {
              "type": "number",
              "description": "상점 아이디",
              "nullable": true
            },
            "lastLoginAt": {
              "format": "date-time",
              "type": "string",
              "description": "최근 로그인 일자",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            },
            "store": {
              "nullable": true,
              "description": "채팅 상점",
              "allOf": [
                {
                  "$ref": "#/components/schemas/ChatRoomManagementFindUniqueWithChatMemberStoreModel"
                }
              ]
            }
          },
          "required": [
            "id",
            "oAuthId",
            "loginId",
            "name",
            "nickname",
            "email",
            "phoneNumber",
            "profileImageUrl",
            "type",
            "role",
            "os",
            "isAgreedTermsOfService",
            "state",
            "joinType",
            "storeId",
            "lastLoginAt",
            "createdAt",
            "updatedAt",
            "deletedAt",
            "store"
          ]
        },
        "ChatRoomManagementFindUniqueWithChatMemberModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "채팅방 아이디",
              "nullable": false
            },
            "userId": {
              "type": "number",
              "description": "유저 아이디",
              "nullable": false
            },
            "chatRoomId": {
              "type": "number",
              "description": "채팅방 아이디",
              "nullable": false
            },
            "lastReadAt": {
              "format": "date-time",
              "type": "string",
              "description": "메세지 읽은 시간",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            },
            "user": {
              "description": "채팅 유저",
              "allOf": [
                {
                  "$ref": "#/components/schemas/ChatRoomManagementFindUniqueWithChatMemberUserModel"
                }
              ]
            }
          },
          "required": [
            "id",
            "userId",
            "chatRoomId",
            "lastReadAt",
            "createdAt",
            "updatedAt",
            "deletedAt",
            "user"
          ]
        },
        "ChatRoomManagementFindUniqueWithChatMessageStoreModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 아이디",
              "nullable": false
            },
            "storeId": {
              "type": "number",
              "description": "상점 고유 아아디",
              "nullable": true
            },
            "crawlerUrl": {
              "type": "string",
              "description": "크롤링 URL",
              "nullable": true
            },
            "name": {
              "type": "string",
              "description": "상점명",
              "nullable": false
            },
            "businessType": {
              "type": "string",
              "description": "비지니스 타입",
              "enum": [
                "SMALL_BUSINESS",
                "FRANCHISE"
              ],
              "nullable": false
            },
            "address": {
              "type": "string",
              "description": "주소",
              "nullable": true
            },
            "phone": {
              "type": "string",
              "description": "전화번호",
              "nullable": true
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 url",
              "nullable": true
            },
            "snsLinks": {
              "description": "SNS 링크",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "images": {
              "description": "이미지 url",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "content": {
              "type": "string",
              "description": "소개",
              "nullable": true
            },
            "reviewImages": {
              "description": "리뷰 이미지",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "merchantNumber": {
              "type": "string",
              "description": "사업자 번호",
              "nullable": true
            },
            "latitude": {
              "type": "number",
              "description": "위도",
              "enum": [],
              "nullable": true
            },
            "longitude": {
              "type": "number",
              "description": "경도",
              "enum": [],
              "nullable": true
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED"
              ],
              "nullable": false
            },
            "temperature": {
              "type": "string",
              "description": "협업 온도",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "storeId",
            "crawlerUrl",
            "name",
            "businessType",
            "address",
            "phone",
            "thumbnail",
            "snsLinks",
            "images",
            "content",
            "reviewImages",
            "merchantNumber",
            "latitude",
            "longitude",
            "state",
            "temperature",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "ChatRoomManagementFindUniqueWithChatMessageUserModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "유저 아이디",
              "nullable": false
            },
            "oAuthId": {
              "type": "string",
              "description": "소셜 아이디",
              "nullable": true
            },
            "loginId": {
              "type": "string",
              "description": "로그인 아이디",
              "nullable": true
            },
            "name": {
              "type": "string",
              "description": "담당자 명",
              "nullable": true
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": true
            },
            "email": {
              "type": "string",
              "description": "이메일",
              "nullable": true
            },
            "phoneNumber": {
              "type": "string",
              "description": "전화번호",
              "nullable": true
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "type": {
              "type": "string",
              "description": "로그인 타입",
              "enum": [
                "DEFAULT",
                "KAKAO",
                "GOOGLE",
                "NAVER",
                "APPLE"
              ],
              "nullable": false
            },
            "role": {
              "type": "string",
              "description": "유저 권한",
              "enum": [
                "SOCIAL_GUEST",
                "USER"
              ],
              "nullable": false
            },
            "os": {
              "type": "string",
              "description": "운영체제",
              "enum": [
                "IOS",
                "ANDROID",
                "WEB"
              ],
              "nullable": true
            },
            "isAgreedTermsOfService": {
              "type": "boolean",
              "description": "개인정보수집 및 이용 동의 유무",
              "nullable": true
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED",
                "PENDING"
              ],
              "nullable": false
            },
            "joinType": {
              "type": "string",
              "description": "가입 타입",
              "enum": [
                "CONNECT",
                "CREATE"
              ],
              "nullable": true
            },
            "storeId": {
              "type": "number",
              "description": "상점 아이디",
              "nullable": true
            },
            "lastLoginAt": {
              "format": "date-time",
              "type": "string",
              "description": "최근 로그인 일자",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            },
            "store": {
              "nullable": true,
              "allOf": [
                {
                  "$ref": "#/components/schemas/ChatRoomManagementFindUniqueWithChatMessageStoreModel"
                }
              ]
            }
          },
          "required": [
            "id",
            "oAuthId",
            "loginId",
            "name",
            "nickname",
            "email",
            "phoneNumber",
            "profileImageUrl",
            "type",
            "role",
            "os",
            "isAgreedTermsOfService",
            "state",
            "joinType",
            "storeId",
            "lastLoginAt",
            "createdAt",
            "updatedAt",
            "deletedAt",
            "store"
          ]
        },
        "ChatRoomManagementFindUniqueWithChatMessageModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "채팅방 아이디",
              "nullable": false
            },
            "chatRoomId": {
              "type": "number",
              "description": "채팅방 아이디",
              "nullable": false
            },
            "senderId": {
              "type": "number",
              "description": "발신자 유저 아이디",
              "nullable": false
            },
            "content": {
              "type": "string",
              "description": "텍스트 메세지",
              "nullable": true
            },
            "imageUrl": {
              "type": "string",
              "description": "이미지 url",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            },
            "user": {
              "$ref": "#/components/schemas/ChatRoomManagementFindUniqueWithChatMessageUserModel"
            }
          },
          "required": [
            "id",
            "chatRoomId",
            "senderId",
            "content",
            "imageUrl",
            "createdAt",
            "updatedAt",
            "deletedAt",
            "user"
          ]
        },
        "ChatRoomManagementFindUniqueModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "채팅방 아이디",
              "nullable": false
            },
            "type": {
              "type": "string",
              "description": "채팅 타입",
              "enum": [
                "PERSONAL",
                "GROUP"
              ],
              "nullable": false
            },
            "agreementsRequestId": {
              "type": "number",
              "description": "협업 요청 아이디",
              "enum": [],
              "nullable": false
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            },
            "chatMember": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ChatRoomManagementFindUniqueWithChatMemberModel"
              }
            },
            "chatMessage": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ChatRoomManagementFindUniqueWithChatMessageModel"
              }
            }
          },
          "required": [
            "id",
            "type",
            "agreementsRequestId",
            "createdAt",
            "updatedAt",
            "deletedAt",
            "chatMember",
            "chatMessage"
          ]
        },
        "ChatRoomManagementFindUniqueResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ChatRoomManagementFindUniqueModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "ChatRoomManagementFindListModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "채팅방 아이디",
              "nullable": false
            },
            "type": {
              "type": "string",
              "description": "채팅 타입",
              "enum": [
                "PERSONAL",
                "GROUP"
              ],
              "nullable": false
            },
            "agreementsRequestId": {
              "type": "number",
              "description": "협업 요청 아이디",
              "enum": [],
              "nullable": false
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "type",
            "agreementsRequestId",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "ChatRoomManagementFindListResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ChatRoomManagementFindListModel"
              }
            },
            "meta": {
              "description": "목록 조회용 메타 데이터",
              "allOf": [
                {
                  "$ref": "#/components/schemas/MetaDataDto"
                }
              ]
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "meta",
            "resultCode",
            "message"
          ]
        },
        "StoreMerchantNumberDupliateCheckResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "boolean",
              "description": "true: 중복, null: 중복 아님",
              "example": null,
              "nullable": false
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "StoreFindUniqueWithUserModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "유저 아이디",
              "nullable": false
            },
            "oAuthId": {
              "type": "string",
              "description": "소셜 아이디",
              "nullable": true
            },
            "loginId": {
              "type": "string",
              "description": "로그인 아이디",
              "nullable": true
            },
            "name": {
              "type": "string",
              "description": "담당자 명",
              "nullable": true
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": true
            },
            "email": {
              "type": "string",
              "description": "이메일",
              "nullable": true
            },
            "phoneNumber": {
              "type": "string",
              "description": "전화번호",
              "nullable": true
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "type": {
              "type": "string",
              "description": "로그인 타입",
              "enum": [
                "DEFAULT",
                "KAKAO",
                "GOOGLE",
                "NAVER",
                "APPLE"
              ],
              "nullable": false
            },
            "role": {
              "type": "string",
              "description": "유저 권한",
              "enum": [
                "SOCIAL_GUEST",
                "USER"
              ],
              "nullable": false
            },
            "os": {
              "type": "string",
              "description": "운영체제",
              "enum": [
                "IOS",
                "ANDROID",
                "WEB"
              ],
              "nullable": true
            },
            "isAgreedTermsOfService": {
              "type": "boolean",
              "description": "개인정보수집 및 이용 동의 유무",
              "nullable": true
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED",
                "PENDING"
              ],
              "nullable": false
            },
            "joinType": {
              "type": "string",
              "description": "가입 타입",
              "enum": [
                "CONNECT",
                "CREATE"
              ],
              "nullable": true
            },
            "storeId": {
              "type": "number",
              "description": "상점 아이디",
              "nullable": true
            },
            "lastLoginAt": {
              "format": "date-time",
              "type": "string",
              "description": "최근 로그인 일자",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "oAuthId",
            "loginId",
            "name",
            "nickname",
            "email",
            "phoneNumber",
            "profileImageUrl",
            "type",
            "role",
            "os",
            "isAgreedTermsOfService",
            "state",
            "joinType",
            "storeId",
            "lastLoginAt",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "StoreFindUniqueInfoStoreReviewKeyword": {
          "type": "object",
          "properties": {
            "value": {
              "type": "string"
            }
          },
          "required": [
            "value"
          ]
        },
        "StoreFindUniqueWithStoreOnReviewModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 리뷰 아이디",
              "nullable": false
            },
            "count": {
              "type": "number",
              "description": "숫자 (리뷰 카운트 등)",
              "nullable": true
            },
            "infoStoreReviewKeyword": {
              "$ref": "#/components/schemas/StoreFindUniqueInfoStoreReviewKeyword"
            }
          },
          "required": [
            "id",
            "count",
            "infoStoreReviewKeyword"
          ]
        },
        "StoreFindUniqueWithInfoStoreCategoryModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 카테고리 아이디",
              "nullable": false
            },
            "value": {
              "type": "string",
              "description": "상점 카테고리 값",
              "nullable": false
            }
          },
          "required": [
            "id",
            "value"
          ]
        },
        "StoreFindUniqueModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 아이디",
              "nullable": false
            },
            "storeId": {
              "type": "number",
              "description": "상점 고유 아아디",
              "nullable": true
            },
            "crawlerUrl": {
              "type": "string",
              "description": "크롤링 URL",
              "nullable": true
            },
            "name": {
              "type": "string",
              "description": "상점명",
              "nullable": false
            },
            "businessType": {
              "type": "string",
              "description": "비지니스 타입",
              "enum": [
                "SMALL_BUSINESS",
                "FRANCHISE"
              ],
              "nullable": false
            },
            "address": {
              "type": "string",
              "description": "주소",
              "nullable": true
            },
            "phone": {
              "type": "string",
              "description": "전화번호",
              "nullable": true
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 url",
              "nullable": true
            },
            "snsLinks": {
              "description": "SNS 링크",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "images": {
              "description": "이미지 url",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "content": {
              "type": "string",
              "description": "소개",
              "nullable": true
            },
            "reviewImages": {
              "description": "리뷰 이미지",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "merchantNumber": {
              "type": "string",
              "description": "사업자 번호",
              "nullable": true
            },
            "latitude": {
              "type": "number",
              "description": "위도",
              "enum": [],
              "nullable": true
            },
            "longitude": {
              "type": "number",
              "description": "경도",
              "enum": [],
              "nullable": true
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED"
              ],
              "nullable": false
            },
            "temperature": {
              "type": "string",
              "description": "협업 온도",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            },
            "user": {
              "nullable": true,
              "description": "유저",
              "allOf": [
                {
                  "$ref": "#/components/schemas/StoreFindUniqueWithUserModel"
                }
              ]
            },
            "storeOnReview": {
              "description": "리뷰 카테고리",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/StoreFindUniqueWithStoreOnReviewModel"
              }
            },
            "infoStoreCategory": {
              "description": "카테고리",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/StoreFindUniqueWithInfoStoreCategoryModel"
              }
            }
          },
          "required": [
            "id",
            "storeId",
            "crawlerUrl",
            "name",
            "businessType",
            "address",
            "phone",
            "thumbnail",
            "snsLinks",
            "images",
            "content",
            "reviewImages",
            "merchantNumber",
            "latitude",
            "longitude",
            "state",
            "temperature",
            "createdAt",
            "updatedAt",
            "deletedAt",
            "user",
            "storeOnReview",
            "infoStoreCategory"
          ]
        },
        "StoreFindUniqueResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/StoreFindUniqueModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "StoreFindListWithUserModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "유저 아이디",
              "nullable": false
            },
            "oAuthId": {
              "type": "string",
              "description": "소셜 아이디",
              "nullable": true
            },
            "loginId": {
              "type": "string",
              "description": "로그인 아이디",
              "nullable": true
            },
            "name": {
              "type": "string",
              "description": "담당자 명",
              "nullable": true
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": true
            },
            "email": {
              "type": "string",
              "description": "이메일",
              "nullable": true
            },
            "phoneNumber": {
              "type": "string",
              "description": "전화번호",
              "nullable": true
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "type": {
              "type": "string",
              "description": "로그인 타입",
              "enum": [
                "DEFAULT",
                "KAKAO",
                "GOOGLE",
                "NAVER",
                "APPLE"
              ],
              "nullable": false
            },
            "role": {
              "type": "string",
              "description": "유저 권한",
              "enum": [
                "SOCIAL_GUEST",
                "USER"
              ],
              "nullable": false
            },
            "os": {
              "type": "string",
              "description": "운영체제",
              "enum": [
                "IOS",
                "ANDROID",
                "WEB"
              ],
              "nullable": true
            },
            "isAgreedTermsOfService": {
              "type": "boolean",
              "description": "개인정보수집 및 이용 동의 유무",
              "nullable": true
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED",
                "PENDING"
              ],
              "nullable": false
            },
            "joinType": {
              "type": "string",
              "description": "가입 타입",
              "enum": [
                "CONNECT",
                "CREATE"
              ],
              "nullable": true
            },
            "storeId": {
              "type": "number",
              "description": "상점 아이디",
              "nullable": true
            },
            "lastLoginAt": {
              "format": "date-time",
              "type": "string",
              "description": "최근 로그인 일자",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "oAuthId",
            "loginId",
            "name",
            "nickname",
            "email",
            "phoneNumber",
            "profileImageUrl",
            "type",
            "role",
            "os",
            "isAgreedTermsOfService",
            "state",
            "joinType",
            "storeId",
            "lastLoginAt",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "StoreFindListWithStoreReviewKeywordModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 리뷰 아이디",
              "nullable": false
            },
            "count": {
              "type": "number",
              "description": "숫자 (리뷰 카운트 등)",
              "nullable": true
            }
          },
          "required": [
            "id",
            "count"
          ]
        },
        "StoreFindListWithInfoStoreCategoryModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 카테고리 아이디",
              "nullable": false
            },
            "value": {
              "type": "string",
              "description": "상점 카테고리 값",
              "nullable": false
            }
          },
          "required": [
            "id",
            "value"
          ]
        },
        "StoreFindListModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 아이디",
              "nullable": false
            },
            "storeId": {
              "type": "number",
              "description": "상점 고유 아아디",
              "nullable": true
            },
            "crawlerUrl": {
              "type": "string",
              "description": "크롤링 URL",
              "nullable": true
            },
            "name": {
              "type": "string",
              "description": "상점명",
              "nullable": false
            },
            "businessType": {
              "type": "string",
              "description": "비지니스 타입",
              "enum": [
                "SMALL_BUSINESS",
                "FRANCHISE"
              ],
              "nullable": false
            },
            "address": {
              "type": "string",
              "description": "주소",
              "nullable": true
            },
            "phone": {
              "type": "string",
              "description": "전화번호",
              "nullable": true
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 url",
              "nullable": true
            },
            "snsLinks": {
              "description": "SNS 링크",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "images": {
              "description": "이미지 url",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "content": {
              "type": "string",
              "description": "소개",
              "nullable": true
            },
            "reviewImages": {
              "description": "리뷰 이미지",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "merchantNumber": {
              "type": "string",
              "description": "사업자 번호",
              "nullable": true
            },
            "latitude": {
              "type": "number",
              "description": "위도",
              "enum": [],
              "nullable": true
            },
            "longitude": {
              "type": "number",
              "description": "경도",
              "enum": [],
              "nullable": true
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED"
              ],
              "nullable": false
            },
            "temperature": {
              "type": "string",
              "description": "협업 온도",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            },
            "user": {
              "nullable": true,
              "description": "유저",
              "allOf": [
                {
                  "$ref": "#/components/schemas/StoreFindListWithUserModel"
                }
              ]
            },
            "storeReviewKeyword": {
              "description": "리뷰 카테고리",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/StoreFindListWithStoreReviewKeywordModel"
              }
            },
            "infoStoreCategory": {
              "description": "카테고리",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/StoreFindListWithInfoStoreCategoryModel"
              }
            }
          },
          "required": [
            "id",
            "storeId",
            "crawlerUrl",
            "name",
            "businessType",
            "address",
            "phone",
            "thumbnail",
            "snsLinks",
            "images",
            "content",
            "reviewImages",
            "merchantNumber",
            "latitude",
            "longitude",
            "state",
            "temperature",
            "createdAt",
            "updatedAt",
            "deletedAt",
            "user",
            "storeReviewKeyword",
            "infoStoreCategory"
          ]
        },
        "StoreFindListResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/StoreFindListModel"
              }
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "AgreementsRequestAiRecommendationRequestDto": {
          "type": "object",
          "properties": {
            "requestStoreId": {
              "type": "number"
            },
            "participantStoreId": {
              "type": "number"
            }
          }
        },
        "AgreementsRequestCreateDto": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "description": "협약 요청 제목"
            },
            "content": {
              "type": "string",
              "description": "콘텐츠"
            },
            "contentHtml": {
              "type": "string",
              "description": "콘텐츠 Html"
            },
            "startDate": {
              "format": "date-time",
              "type": "string",
              "description": "시작일"
            },
            "endDate": {
              "format": "date-time",
              "type": "string",
              "description": "종료일"
            },
            "serviceType": {
              "type": "object",
              "description": "협약 서비스 타입"
            },
            "agreementsType": {
              "type": "object",
              "description": "협업 타입"
            },
            "goals": {
              "description": "목표 성과",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 URL"
            },
            "participantInputInfoIds": {
              "description": "신청자 입력 값 아이디",
              "type": "array",
              "items": {
                "type": "number"
              }
            }
          },
          "required": [
            "title",
            "content",
            "contentHtml",
            "serviceType",
            "agreementsType"
          ]
        },
        "AgreementsRequestCreateModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "협약 요청 아이디",
              "nullable": false
            }
          },
          "required": [
            "id"
          ]
        },
        "AgreementsRequestCreateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/AgreementsRequestCreateModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "AgreementsRequestUpdateDto": {
          "type": "object",
          "properties": {}
        },
        "AgreementsRequestUpdateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "AgreementsRequestDeleteResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "AgreementsRequestFindUniqueWithStoreModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 아이디",
              "nullable": false
            },
            "storeId": {
              "type": "number",
              "description": "상점 고유 아아디",
              "nullable": true
            },
            "crawlerUrl": {
              "type": "string",
              "description": "크롤링 URL",
              "nullable": true
            },
            "name": {
              "type": "string",
              "description": "상점명",
              "nullable": false
            },
            "businessType": {
              "type": "string",
              "description": "비지니스 타입",
              "enum": [
                "SMALL_BUSINESS",
                "FRANCHISE"
              ],
              "nullable": false
            },
            "address": {
              "type": "string",
              "description": "주소",
              "nullable": true
            },
            "phone": {
              "type": "string",
              "description": "전화번호",
              "nullable": true
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 url",
              "nullable": true
            },
            "snsLinks": {
              "description": "SNS 링크",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "images": {
              "description": "이미지 url",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "content": {
              "type": "string",
              "description": "소개",
              "nullable": true
            },
            "reviewImages": {
              "description": "리뷰 이미지",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "merchantNumber": {
              "type": "string",
              "description": "사업자 번호",
              "nullable": true
            },
            "latitude": {
              "type": "number",
              "description": "위도",
              "enum": [],
              "nullable": true
            },
            "longitude": {
              "type": "number",
              "description": "경도",
              "enum": [],
              "nullable": true
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED"
              ],
              "nullable": false
            },
            "temperature": {
              "type": "string",
              "description": "협업 온도",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "storeId",
            "crawlerUrl",
            "name",
            "businessType",
            "address",
            "phone",
            "thumbnail",
            "snsLinks",
            "images",
            "content",
            "reviewImages",
            "merchantNumber",
            "latitude",
            "longitude",
            "state",
            "temperature",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "AgreementsRequestFindUniqueWithStoreOnReviewRequestModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 리뷰 아이디",
              "nullable": false
            },
            "count": {
              "type": "number",
              "description": "숫자 (리뷰 카운트 등)",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "storeReviewId": {
              "type": "number",
              "description": "협약 요청 리뷰 아이디",
              "nullable": false
            },
            "storeId": {
              "type": "number",
              "description": "리뷰 대상 상점 아이디",
              "nullable": false
            },
            "infoStoreReviewKeywordId": {
              "type": "number",
              "description": "상점 카테고리 아이디",
              "nullable": false
            },
            "agreementsRequestId": {
              "type": "number",
              "description": "협약 요청 아이디",
              "nullable": false
            }
          },
          "required": [
            "id",
            "count",
            "createdAt",
            "storeReviewId",
            "storeId",
            "infoStoreReviewKeywordId",
            "agreementsRequestId"
          ]
        },
        "AgreementsRequestFindUniqueWithAgreementsRequestParticipantModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "댓글 아이디",
              "nullable": false
            },
            "content": {
              "type": "string",
              "description": "내용",
              "nullable": false
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED"
              ],
              "nullable": false
            },
            "agreementsRequestId": {
              "type": "number",
              "description": "협약 요청 아이디",
              "nullable": false
            },
            "participantStoreId": {
              "type": "number",
              "description": "참여 상점 아이디",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "content",
            "state",
            "agreementsRequestId",
            "participantStoreId",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "AgreementsRequestFindUniqueModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "협약 요청 아이디",
              "nullable": false
            },
            "title": {
              "type": "string",
              "description": "협약 요청 제목",
              "nullable": false
            },
            "content": {
              "type": "string",
              "description": "콘텐츠",
              "nullable": false
            },
            "contentHtml": {
              "type": "string",
              "description": "콘텐츠 Html",
              "nullable": false
            },
            "startDate": {
              "format": "date-time",
              "type": "string",
              "description": "시작일",
              "nullable": true
            },
            "endDate": {
              "format": "date-time",
              "type": "string",
              "description": "종료일",
              "nullable": true
            },
            "serviceType": {
              "type": "string",
              "description": "협약 서비스 타입",
              "enum": [
                "AI",
                "EVENT",
                "PROMOTION"
              ],
              "nullable": false
            },
            "agreementsType": {
              "type": "string",
              "description": "협업 타입",
              "enum": [
                "PERSONAL",
                "GROUP"
              ],
              "nullable": false
            },
            "state": {
              "type": "string",
              "description": "협약 요청 상태",
              "enum": [
                "PENDING",
                "WATCHING",
                "STARTING",
                "END",
                "ACTIVE",
                "DISABLED"
              ],
              "nullable": false
            },
            "goals": {
              "description": "목표 성과",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 URL",
              "nullable": true
            },
            "images": {
              "description": "기타 이미지",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "participantCount": {
              "type": "number",
              "description": "참가 인원",
              "nullable": true
            },
            "requestStoreId": {
              "type": "number",
              "description": "생성 상점 아이디",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            },
            "store": {
              "nullable": true,
              "allOf": [
                {
                  "$ref": "#/components/schemas/AgreementsRequestFindUniqueWithStoreModel"
                }
              ]
            },
            "storeOnReview": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AgreementsRequestFindUniqueWithStoreOnReviewRequestModel"
              }
            },
            "agreementsRequestParticipant": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AgreementsRequestFindUniqueWithAgreementsRequestParticipantModel"
              }
            }
          },
          "required": [
            "id",
            "title",
            "content",
            "contentHtml",
            "startDate",
            "endDate",
            "serviceType",
            "agreementsType",
            "state",
            "goals",
            "thumbnail",
            "images",
            "participantCount",
            "requestStoreId",
            "createdAt",
            "updatedAt",
            "deletedAt",
            "store",
            "storeOnReview",
            "agreementsRequestParticipant"
          ]
        },
        "AgreementsRequestFindUniqueResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/AgreementsRequestFindUniqueModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "AgreementsRequestFindListModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "협약 요청 아이디",
              "nullable": false
            },
            "title": {
              "type": "string",
              "description": "협약 요청 제목",
              "nullable": false
            },
            "content": {
              "type": "string",
              "description": "콘텐츠",
              "nullable": false
            },
            "contentHtml": {
              "type": "string",
              "description": "콘텐츠 Html",
              "nullable": false
            },
            "startDate": {
              "format": "date-time",
              "type": "string",
              "description": "시작일",
              "nullable": true
            },
            "endDate": {
              "format": "date-time",
              "type": "string",
              "description": "종료일",
              "nullable": true
            },
            "serviceType": {
              "type": "string",
              "description": "협약 서비스 타입",
              "enum": [
                "AI",
                "EVENT",
                "PROMOTION"
              ],
              "nullable": false
            },
            "agreementsType": {
              "type": "string",
              "description": "협업 타입",
              "enum": [
                "PERSONAL",
                "GROUP"
              ],
              "nullable": false
            },
            "state": {
              "type": "string",
              "description": "협약 요청 상태",
              "enum": [
                "PENDING",
                "WATCHING",
                "STARTING",
                "END",
                "ACTIVE",
                "DISABLED"
              ],
              "nullable": false
            },
            "goals": {
              "description": "목표 성과",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 URL",
              "nullable": true
            },
            "images": {
              "description": "기타 이미지",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "participantCount": {
              "type": "number",
              "description": "참가 인원",
              "nullable": true
            },
            "requestStoreId": {
              "type": "number",
              "description": "생성 상점 아이디",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "title",
            "content",
            "contentHtml",
            "startDate",
            "endDate",
            "serviceType",
            "agreementsType",
            "state",
            "goals",
            "thumbnail",
            "images",
            "participantCount",
            "requestStoreId",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "AgreementsRequestFindListResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AgreementsRequestFindListModel"
              }
            },
            "meta": {
              "description": "목록 조회용 메타 데이터",
              "allOf": [
                {
                  "$ref": "#/components/schemas/MetaDataDto"
                }
              ]
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "meta",
            "resultCode",
            "message"
          ]
        },
        "UserInitialUpdateStoreDto": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 아이디"
            },
            "businessType": {
              "type": "object",
              "description": "비지니스 타입"
            },
            "name": {
              "type": "string",
              "description": "상점 명"
            },
            "address": {
              "type": "string",
              "description": "상점 주소"
            },
            "merchantNumber": {
              "type": "string",
              "description": "사업자 번호"
            }
          }
        },
        "UserInitialUpdateDto": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "description": "담당자 명"
            },
            "email": {
              "type": "string",
              "description": "이메일"
            },
            "phoneNumber": {
              "type": "string",
              "description": "휴대폰 번호"
            },
            "joinType": {
              "type": "object",
              "description": "가입 타입"
            },
            "isAgreedTermsOfService": {
              "type": "boolean",
              "description": "개인정보수집 및 이용 동의 유무"
            },
            "store": {
              "description": "상점",
              "allOf": [
                {
                  "$ref": "#/components/schemas/UserInitialUpdateStoreDto"
                }
              ]
            }
          },
          "required": [
            "name",
            "email",
            "phoneNumber",
            "joinType",
            "isAgreedTermsOfService",
            "store"
          ]
        },
        "UserInitialUpdateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "UserUpdateOwnDto": {
          "type": "object",
          "properties": {
            "nickname": {
              "type": "string",
              "description": "닉네임"
            },
            "email": {
              "type": "string",
              "description": "이메일"
            },
            "phoneNumber": {
              "type": "string",
              "description": "전화번호"
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url"
            },
            "isAgreedTermsOfService": {
              "type": "boolean",
              "description": "개인정보수집 및 이용 동의 유무"
            },
            "isAlarmSettings": {
              "type": "boolean",
              "description": "알람 수신 여부"
            }
          }
        },
        "UserUpdateOwnResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "UserUpdatePasswordOwnDto": {
          "type": "object",
          "properties": {
            "currentPassword": {
              "type": "string",
              "description": "현재 비밀번호"
            },
            "newPassword": {
              "type": "string",
              "description": "새 비밀번호"
            }
          },
          "required": [
            "currentPassword",
            "newPassword"
          ]
        },
        "UserUpdatePasswordOwnResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "UserDeleteOwnResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "UserFindUniqueOwnResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "유저 아이디",
              "nullable": false
            },
            "oAuthId": {
              "type": "string",
              "description": "소셜 아이디",
              "nullable": true
            },
            "loginId": {
              "type": "string",
              "description": "로그인 아이디",
              "nullable": true
            },
            "name": {
              "type": "string",
              "description": "담당자 명",
              "nullable": true
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": true
            },
            "email": {
              "type": "string",
              "description": "이메일",
              "nullable": true
            },
            "phoneNumber": {
              "type": "string",
              "description": "전화번호",
              "nullable": true
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "type": {
              "type": "string",
              "description": "로그인 타입",
              "enum": [
                "DEFAULT",
                "KAKAO",
                "GOOGLE",
                "NAVER",
                "APPLE"
              ],
              "nullable": false
            },
            "role": {
              "type": "string",
              "description": "유저 권한",
              "enum": [
                "SOCIAL_GUEST",
                "USER"
              ],
              "nullable": false
            },
            "os": {
              "type": "string",
              "description": "운영체제",
              "enum": [
                "IOS",
                "ANDROID",
                "WEB"
              ],
              "nullable": true
            },
            "isAgreedTermsOfService": {
              "type": "boolean",
              "description": "개인정보수집 및 이용 동의 유무",
              "nullable": true
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED",
                "PENDING"
              ],
              "nullable": false
            },
            "joinType": {
              "type": "string",
              "description": "가입 타입",
              "enum": [
                "CONNECT",
                "CREATE"
              ],
              "nullable": true
            },
            "storeId": {
              "type": "number",
              "description": "상점 아이디",
              "nullable": true
            },
            "lastLoginAt": {
              "format": "date-time",
              "type": "string",
              "description": "최근 로그인 일자",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "oAuthId",
            "loginId",
            "name",
            "nickname",
            "email",
            "phoneNumber",
            "profileImageUrl",
            "type",
            "role",
            "os",
            "isAgreedTermsOfService",
            "state",
            "joinType",
            "storeId",
            "lastLoginAt",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "UserFindUniqueOwnResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/UserFindUniqueOwnResponseModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "UserDuplicateLoginIdCheckResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "boolean"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "UserDuplicateNicknameCheckResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "boolean"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "AgreementsStoryCreateDto": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "description": "협업 이야기 제목",
              "nullable": false
            },
            "content": {
              "type": "string",
              "description": "콘텐츠",
              "nullable": false
            },
            "contentHtml": {
              "type": "string",
              "description": "콘텐츠 HTML",
              "nullable": false
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 URL",
              "nullable": true
            },
            "images": {
              "description": "기타 이미지 배열",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "agreementsRequestId": {
              "type": "number",
              "description": "협업 요청 아이디",
              "nullable": false
            }
          },
          "required": [
            "title",
            "content",
            "contentHtml",
            "thumbnail",
            "images",
            "agreementsRequestId"
          ]
        },
        "AgreementsStoryCreateModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "협업 이야기 아이디",
              "nullable": false
            }
          },
          "required": [
            "id"
          ]
        },
        "AgreementsStoryCreateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/AgreementsStoryCreateModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "AgreementsStoryUpdateDto": {
          "type": "object",
          "properties": {}
        },
        "AgreementsStoryUpdateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "AgreementsStoryDeleteResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "AgreementsStoryFindUniqueModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "협업 이야기 아이디",
              "nullable": false
            },
            "title": {
              "type": "string",
              "description": "협업 이야기 제목",
              "nullable": false
            },
            "content": {
              "type": "string",
              "description": "콘텐츠",
              "nullable": false
            },
            "contentHtml": {
              "type": "string",
              "description": "콘텐츠 HTML",
              "nullable": false
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 URL",
              "nullable": true
            },
            "images": {
              "description": "기타 이미지 배열",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "storeId": {
              "type": "number",
              "description": "작성 상점 아이디",
              "nullable": false
            },
            "agreementsRequestId": {
              "type": "number",
              "description": "협업 요청 아이디",
              "nullable": false
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "title",
            "content",
            "contentHtml",
            "thumbnail",
            "images",
            "storeId",
            "agreementsRequestId",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "AgreementsStoryFindUniqueResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/AgreementsStoryFindUniqueModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "AgreementsStoryFindListModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "협업 이야기 아이디",
              "nullable": false
            },
            "title": {
              "type": "string",
              "description": "협업 이야기 제목",
              "nullable": false
            },
            "content": {
              "type": "string",
              "description": "콘텐츠",
              "nullable": false
            },
            "contentHtml": {
              "type": "string",
              "description": "콘텐츠 HTML",
              "nullable": false
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 URL",
              "nullable": true
            },
            "images": {
              "description": "기타 이미지 배열",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "storeId": {
              "type": "number",
              "description": "작성 상점 아이디",
              "nullable": false
            },
            "agreementsRequestId": {
              "type": "number",
              "description": "협업 요청 아이디",
              "nullable": false
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "title",
            "content",
            "contentHtml",
            "thumbnail",
            "images",
            "storeId",
            "agreementsRequestId",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "AgreementsStoryFindListResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AgreementsStoryFindListModel"
              }
            },
            "meta": {
              "description": "목록 조회용 메타 데이터",
              "allOf": [
                {
                  "$ref": "#/components/schemas/MetaDataDto"
                }
              ]
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "meta",
            "resultCode",
            "message"
          ]
        },
        "TermsFindManyResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "약관 아이디",
              "nullable": false
            },
            "type": {
              "type": "string",
              "description": "약관 타입",
              "enum": [
                "PRIVACY_POLICY",
                "TERMS_OF_USE"
              ],
              "nullable": false
            },
            "url": {
              "type": "string",
              "description": "약관 HTML URL",
              "nullable": false
            },
            "version": {
              "type": "string",
              "description": "약관 버전",
              "nullable": false
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "type",
            "url",
            "version",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "TermsFindManyResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/TermsFindManyResponseModel"
              }
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "PostCommentCreateDto": {
          "type": "object",
          "properties": {
            "content": {
              "type": "string",
              "description": "내용"
            },
            "postId": {
              "type": "number",
              "description": "게시물 아이디"
            }
          },
          "required": [
            "content",
            "postId"
          ]
        },
        "PostCommentCreateResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "댓글 아이디",
              "nullable": false
            }
          },
          "required": [
            "id"
          ]
        },
        "PostCommentCreateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/PostCommentCreateResponseModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "PostCommentUpdateOwnDto": {
          "type": "object",
          "properties": {
            "content": {
              "type": "string",
              "description": "내용"
            }
          },
          "required": [
            "content"
          ]
        },
        "PostCommentUpdateOwnResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "PostCommentDeleteOwnResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "PostCommentFindUniqueWithUserResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "유저 아이디",
              "nullable": false
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": true
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "nickname",
            "profileImageUrl",
            "deletedAt"
          ]
        },
        "PostCommentFindUniqueWithAdminResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "관리자 아이디",
              "nullable": false
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": false
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "nickname",
            "profileImageUrl",
            "deletedAt"
          ]
        },
        "PostCommentFindUniqueResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "댓글 아이디",
              "nullable": false
            },
            "content": {
              "type": "string",
              "description": "내용",
              "nullable": false
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED"
              ],
              "nullable": false
            },
            "postId": {
              "type": "number",
              "description": "게시물 아이디",
              "nullable": false
            },
            "userId": {
              "type": "number",
              "description": "댓글 작성자 아이디",
              "nullable": true
            },
            "adminId": {
              "type": "number",
              "description": "관리자 아이디",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            },
            "user": {
              "nullable": true,
              "description": "작성자 정보",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostCommentFindUniqueWithUserResponseModel"
                }
              ]
            },
            "admin": {
              "nullable": true,
              "description": "작성자 정보",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostCommentFindUniqueWithAdminResponseModel"
                }
              ]
            }
          },
          "required": [
            "id",
            "content",
            "state",
            "postId",
            "userId",
            "adminId",
            "createdAt",
            "updatedAt",
            "deletedAt",
            "user",
            "admin"
          ]
        },
        "PostCommentFindUniqueResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/PostCommentFindUniqueResponseModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "PostCommentFindListWithUserResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "유저 아이디",
              "nullable": false
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": true
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "nickname",
            "profileImageUrl",
            "deletedAt"
          ]
        },
        "PostCommentFindListWithAdminResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "관리자 아이디",
              "nullable": false
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": false
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "nickname",
            "profileImageUrl",
            "deletedAt"
          ]
        },
        "PostCommentFindListResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "댓글 아이디",
              "nullable": false
            },
            "content": {
              "type": "string",
              "description": "내용",
              "nullable": false
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED"
              ],
              "nullable": false
            },
            "postId": {
              "type": "number",
              "description": "게시물 아이디",
              "nullable": false
            },
            "userId": {
              "type": "number",
              "description": "댓글 작성자 아이디",
              "nullable": true
            },
            "adminId": {
              "type": "number",
              "description": "관리자 아이디",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            },
            "user": {
              "nullable": true,
              "description": "작성자 정보",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostCommentFindListWithUserResponseModel"
                }
              ]
            },
            "admin": {
              "nullable": true,
              "description": "작성자 정보",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostCommentFindListWithAdminResponseModel"
                }
              ]
            }
          },
          "required": [
            "id",
            "content",
            "state",
            "postId",
            "userId",
            "adminId",
            "createdAt",
            "updatedAt",
            "deletedAt",
            "user",
            "admin"
          ]
        },
        "PostCommentFindListResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/PostCommentFindListResponseModel"
              }
            },
            "meta": {
              "description": "목록 조회용 메타 데이터",
              "allOf": [
                {
                  "$ref": "#/components/schemas/MetaDataDto"
                }
              ]
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "meta",
            "resultCode",
            "message"
          ]
        },
        "PostCreateDto": {
          "type": "object",
          "properties": {
            "postTypeId": {
              "type": "number",
              "description": "게시물 타입"
            },
            "postCategoryId": {
              "type": "number",
              "description": "게시물 카테고리"
            },
            "images": {
              "description": "이미지 업로드",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "files": {
              "description": "첨부파일 업로드",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "isSecret": {
              "type": "boolean",
              "description": "비밀글 여부 (작성자와 관리자만 볼 수 있음"
            },
            "isComment": {
              "type": "boolean",
              "description": "댓글 여부"
            },
            "title": {
              "type": "string",
              "description": "제목"
            },
            "content": {
              "type": "string",
              "description": "내용"
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 url"
            }
          },
          "required": [
            "postTypeId",
            "isSecret",
            "isComment",
            "title",
            "content"
          ]
        },
        "PostCreateResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "게시물 아이디",
              "nullable": false
            }
          },
          "required": [
            "id"
          ]
        },
        "PostCreateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/PostCreateResponseModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "PostCreateByGuestWithGuest": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "description": "비회원 명"
            },
            "tel": {
              "type": "string",
              "description": "비회원 연락처"
            },
            "password": {
              "type": "string",
              "description": "비회원 패스워드"
            }
          },
          "required": [
            "name",
            "tel",
            "password"
          ]
        },
        "PostCreateByGuestDto": {
          "type": "object",
          "properties": {
            "postTypeId": {
              "type": "number",
              "description": "게시물 타입"
            },
            "postCategoryId": {
              "type": "number",
              "description": "게시물 카테고리"
            },
            "images": {
              "description": "이미지 업로드",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "files": {
              "description": "첨부파일 업로드",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "isSecret": {
              "type": "boolean",
              "description": "비밀글 여부 (작성자와 관리자만 볼 수 있음"
            },
            "isComment": {
              "type": "boolean",
              "description": "댓글 여부"
            },
            "title": {
              "type": "string",
              "description": "제목"
            },
            "content": {
              "type": "string",
              "description": "내용"
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 url"
            },
            "guest": {
              "description": "비회원 작성자",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostCreateByGuestWithGuest"
                }
              ]
            }
          },
          "required": [
            "postTypeId",
            "isSecret",
            "isComment",
            "title",
            "content",
            "guest"
          ]
        },
        "PostCreateByGuestResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "게시물 아이디",
              "nullable": false
            }
          },
          "required": [
            "id"
          ]
        },
        "PostCreateByGuestResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/PostCreateByGuestResponseModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "PostUpdateOwnDto": {
          "type": "object",
          "properties": {
            "postCategoryId": {
              "type": "number",
              "description": "게시물 카테고리"
            },
            "isSecret": {
              "type": "boolean",
              "description": "비밀글 여부 (작성자와 관리자만 볼 수 있음"
            },
            "isComment": {
              "type": "boolean",
              "description": "댓글 여부"
            },
            "title": {
              "type": "string",
              "description": "제목"
            },
            "content": {
              "type": "string",
              "description": "내용"
            },
            "images": {
              "description": "이미지 업로드",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "files": {
              "description": "첨부파일 업로드",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 url"
            }
          }
        },
        "PostUpdateOwnResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "PostUpdateByGuestOwnWithGuest": {
          "type": "object",
          "properties": {
            "password": {
              "type": "string",
              "description": "비회원 패스워드"
            }
          },
          "required": [
            "password"
          ]
        },
        "PostUpdateByGuestOwnDto": {
          "type": "object",
          "properties": {
            "postCategoryId": {
              "type": "number",
              "description": "게시물 카테고리"
            },
            "isSecret": {
              "type": "boolean",
              "description": "비밀글 여부 (작성자와 관리자만 볼 수 있음"
            },
            "isComment": {
              "type": "boolean",
              "description": "댓글 여부"
            },
            "title": {
              "type": "string",
              "description": "제목"
            },
            "content": {
              "type": "string",
              "description": "내용"
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 url"
            },
            "images": {
              "description": "이미지 업로드",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "files": {
              "description": "첨부파일 업로드",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "guest": {
              "description": "비회원 작성자 정보",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostUpdateByGuestOwnWithGuest"
                }
              ]
            }
          },
          "required": [
            "guest"
          ]
        },
        "PostUpdateByGuestOwnResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "PostUpdateLikeResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "PostDeleteOwnResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "PostDeleteByGuestOwnResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "PostFindUniqueWithUserResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "유저 아이디",
              "nullable": false
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": true
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "nickname",
            "profileImageUrl",
            "deletedAt"
          ]
        },
        "PostFindUniqueWithAdminResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "관리자 아이디",
              "nullable": false
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": false
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "nickname",
            "profileImageUrl",
            "deletedAt"
          ]
        },
        "PostFindUniqueWithGuestResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "게스트 아이디",
              "nullable": false
            },
            "name": {
              "type": "string",
              "description": "이름",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "name",
            "deletedAt"
          ]
        },
        "PostFindUniqueWithPostTypeResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "게시물 타입 아이디",
              "nullable": false
            },
            "value": {
              "type": "string",
              "description": "게시물 타입 값",
              "nullable": false
            }
          },
          "required": [
            "id",
            "value"
          ]
        },
        "PostFindUniqueWithPostCategoryResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "게시물 카테고리 아이디",
              "nullable": false
            },
            "value": {
              "type": "string",
              "description": "게시물 카테고리 값",
              "nullable": false
            }
          },
          "required": [
            "id",
            "value"
          ]
        },
        "PostFindUniqueResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "게시물 아이디",
              "nullable": false
            },
            "isTop": {
              "type": "boolean",
              "description": "상단 고정 여부",
              "nullable": false
            },
            "isSecret": {
              "type": "boolean",
              "description": "비밀글 여부 (작성자만 볼 수 있음)",
              "nullable": false
            },
            "isComment": {
              "type": "boolean",
              "description": "댓글 여부",
              "nullable": false
            },
            "viewCount": {
              "type": "number",
              "description": "조회수",
              "nullable": false
            },
            "likeCount": {
              "type": "number",
              "description": "좋아요 수",
              "nullable": false
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 url",
              "nullable": true
            },
            "title": {
              "type": "string",
              "description": "제목",
              "nullable": false
            },
            "content": {
              "type": "string",
              "description": "내용",
              "nullable": false
            },
            "images": {
              "description": "이미지 url",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "files": {
              "description": "첨부파일 url",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED"
              ],
              "nullable": false
            },
            "userId": {
              "type": "number",
              "description": "작성자(유저) 아이디",
              "nullable": true
            },
            "adminId": {
              "type": "number",
              "description": "작성자(관리자) 아이디",
              "nullable": true
            },
            "postTypeId": {
              "type": "number",
              "description": "게시물 타입 아이디",
              "nullable": false
            },
            "postCategoryId": {
              "type": "number",
              "description": "게시물 카테고리 아이디",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            },
            "user": {
              "nullable": true,
              "description": "작성자 정보",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostFindUniqueWithUserResponseModel"
                }
              ]
            },
            "admin": {
              "nullable": true,
              "description": "작성자 정보",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostFindUniqueWithAdminResponseModel"
                }
              ]
            },
            "guest": {
              "nullable": true,
              "description": "작성자 정보",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostFindUniqueWithGuestResponseModel"
                }
              ]
            },
            "postType": {
              "description": "게시물 타입",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostFindUniqueWithPostTypeResponseModel"
                }
              ]
            },
            "postCategory": {
              "nullable": true,
              "description": "게시물 카테고리",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostFindUniqueWithPostCategoryResponseModel"
                }
              ]
            }
          },
          "required": [
            "id",
            "isTop",
            "isSecret",
            "isComment",
            "viewCount",
            "likeCount",
            "thumbnail",
            "title",
            "content",
            "images",
            "files",
            "state",
            "userId",
            "adminId",
            "postTypeId",
            "postCategoryId",
            "createdAt",
            "updatedAt",
            "deletedAt",
            "user",
            "admin",
            "guest",
            "postType",
            "postCategory"
          ]
        },
        "PostFindUniqueResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/PostFindUniqueResponseModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "PostFindListWithUserResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "유저 아이디",
              "nullable": false
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": true
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "nickname",
            "profileImageUrl",
            "deletedAt"
          ]
        },
        "PostFindListWithAdminResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "관리자 아이디",
              "nullable": false
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": false
            },
            "profileImageUrl": {
              "type": "string",
              "description": "프로필 이미지 url",
              "nullable": true
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "nickname",
            "profileImageUrl",
            "deletedAt"
          ]
        },
        "PostFindListWithGuestResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "게스트 아이디",
              "nullable": false
            },
            "name": {
              "type": "string",
              "description": "이름",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "name",
            "deletedAt"
          ]
        },
        "PostFindListWithPostTypeResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "게시물 타입 아이디",
              "nullable": false
            },
            "value": {
              "type": "string",
              "description": "게시물 타입 값",
              "nullable": false
            }
          },
          "required": [
            "id",
            "value"
          ]
        },
        "PostFindListWithPostCategoryResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "게시물 카테고리 아이디",
              "nullable": false
            },
            "value": {
              "type": "string",
              "description": "게시물 카테고리 값",
              "nullable": false
            }
          },
          "required": [
            "id",
            "value"
          ]
        },
        "PostFindListWithCount": {
          "type": "object",
          "properties": {
            "postComments": {
              "type": "number",
              "description": "댓글 개수"
            }
          },
          "required": [
            "postComments"
          ]
        },
        "PostFindListResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "게시물 아이디",
              "nullable": false
            },
            "isTop": {
              "type": "boolean",
              "description": "상단 고정 여부",
              "nullable": false
            },
            "isSecret": {
              "type": "boolean",
              "description": "비밀글 여부 (작성자만 볼 수 있음)",
              "nullable": false
            },
            "isComment": {
              "type": "boolean",
              "description": "댓글 여부",
              "nullable": false
            },
            "viewCount": {
              "type": "number",
              "description": "조회수",
              "nullable": false
            },
            "likeCount": {
              "type": "number",
              "description": "좋아요 수",
              "nullable": false
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 url",
              "nullable": true
            },
            "title": {
              "type": "string",
              "description": "제목",
              "nullable": false
            },
            "images": {
              "description": "이미지 url",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "files": {
              "description": "첨부파일 url",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED"
              ],
              "nullable": false
            },
            "userId": {
              "type": "number",
              "description": "작성자(유저) 아이디",
              "nullable": true
            },
            "adminId": {
              "type": "number",
              "description": "작성자(관리자) 아이디",
              "nullable": true
            },
            "postTypeId": {
              "type": "number",
              "description": "게시물 타입 아이디",
              "nullable": false
            },
            "postCategoryId": {
              "type": "number",
              "description": "게시물 카테고리 아이디",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            },
            "user": {
              "nullable": true,
              "description": "작성자 정보",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostFindListWithUserResponseModel"
                }
              ]
            },
            "admin": {
              "nullable": true,
              "description": "작성자 정보",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostFindListWithAdminResponseModel"
                }
              ]
            },
            "guest": {
              "nullable": true,
              "description": "작성자 정보",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostFindListWithGuestResponseModel"
                }
              ]
            },
            "postType": {
              "description": "게시물 타입",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostFindListWithPostTypeResponseModel"
                }
              ]
            },
            "postCategory": {
              "nullable": true,
              "description": "게시물 카테고리",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostFindListWithPostCategoryResponseModel"
                }
              ]
            },
            "_count": {
              "description": "관련 카운트",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PostFindListWithCount"
                }
              ]
            }
          },
          "required": [
            "id",
            "isTop",
            "isSecret",
            "isComment",
            "viewCount",
            "likeCount",
            "thumbnail",
            "title",
            "images",
            "files",
            "state",
            "userId",
            "adminId",
            "postTypeId",
            "postCategoryId",
            "createdAt",
            "updatedAt",
            "deletedAt",
            "user",
            "admin",
            "guest",
            "postType",
            "postCategory",
            "_count"
          ]
        },
        "PostFindListResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/PostFindListResponseModel"
              }
            },
            "meta": {
              "description": "목록 조회용 메타 데이터",
              "allOf": [
                {
                  "$ref": "#/components/schemas/MetaDataDto"
                }
              ]
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "meta",
            "resultCode",
            "message"
          ]
        },
        "storeReveiwCreateDto": {
          "type": "object",
          "properties": {
            "nickname": {
              "type": "string",
              "description": "닉네임"
            },
            "content": {
              "type": "string",
              "description": "내용"
            },
            "images": {
              "description": "이미지",
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          "required": [
            "nickname",
            "content",
            "images"
          ]
        },
        "StoreOnReviewCreateDto": {
          "type": "object",
          "properties": {
            "storeReview": {
              "description": "협약 요청 리뷰 아이디",
              "allOf": [
                {
                  "$ref": "#/components/schemas/storeReveiwCreateDto"
                }
              ]
            },
            "storeId": {
              "type": "number",
              "description": "리뷰 대상 상점 아이디"
            },
            "infoStoreReviewKeywordId": {
              "type": "number",
              "description": "상점 카테고리 아이디"
            },
            "agreementsRequestId": {
              "type": "number",
              "description": "협업 요청 아이디"
            },
            "count": {
              "type": "number",
              "description": "숫자 (리뷰 카운트)"
            }
          },
          "required": [
            "storeReview",
            "storeId",
            "infoStoreReviewKeywordId",
            "agreementsRequestId"
          ]
        },
        "StoreOnReviewCreateModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 리뷰 아이디",
              "nullable": false
            }
          },
          "required": [
            "id"
          ]
        },
        "StoreOnReviewCreateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/StoreOnReviewCreateModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "StoreOnReviewUpdateDto": {
          "type": "object",
          "properties": {}
        },
        "StoreOnReviewUpdateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "StoreOnReviewDeleteResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "StoreOnReviewFindUniqueModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 리뷰 아이디",
              "nullable": false
            },
            "count": {
              "type": "number",
              "description": "숫자 (리뷰 카운트 등)",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "storeReviewId": {
              "type": "number",
              "description": "협약 요청 리뷰 아이디",
              "nullable": false
            },
            "storeId": {
              "type": "number",
              "description": "리뷰 대상 상점 아이디",
              "nullable": false
            },
            "infoStoreReviewKeywordId": {
              "type": "number",
              "description": "상점 카테고리 아이디",
              "nullable": false
            },
            "agreementsRequestId": {
              "type": "number",
              "description": "협약 요청 아이디",
              "nullable": false
            }
          },
          "required": [
            "id",
            "count",
            "createdAt",
            "storeReviewId",
            "storeId",
            "infoStoreReviewKeywordId",
            "agreementsRequestId"
          ]
        },
        "StoreOnReviewFindUniqueResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/StoreOnReviewFindUniqueModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "StoreOnReviewFindListWithStoreReviewModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "리뷰 아이디",
              "nullable": false
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": false
            },
            "content": {
              "type": "string",
              "description": "내용",
              "nullable": false
            },
            "images": {
              "description": "이미지 URL",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "nickname",
            "content",
            "images",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "StoreOnReviewFindListWithStoreModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 아이디",
              "nullable": false
            },
            "storeId": {
              "type": "number",
              "description": "상점 고유 아아디",
              "nullable": true
            },
            "crawlerUrl": {
              "type": "string",
              "description": "크롤링 URL",
              "nullable": true
            },
            "name": {
              "type": "string",
              "description": "상점명",
              "nullable": false
            },
            "businessType": {
              "type": "string",
              "description": "비지니스 타입",
              "enum": [
                "SMALL_BUSINESS",
                "FRANCHISE"
              ],
              "nullable": false
            },
            "address": {
              "type": "string",
              "description": "주소",
              "nullable": true
            },
            "phone": {
              "type": "string",
              "description": "전화번호",
              "nullable": true
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 url",
              "nullable": true
            },
            "snsLinks": {
              "description": "SNS 링크",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "images": {
              "description": "이미지 url",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "content": {
              "type": "string",
              "description": "소개",
              "nullable": true
            },
            "reviewImages": {
              "description": "리뷰 이미지",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "merchantNumber": {
              "type": "string",
              "description": "사업자 번호",
              "nullable": true
            },
            "latitude": {
              "type": "number",
              "description": "위도",
              "enum": [],
              "nullable": true
            },
            "longitude": {
              "type": "number",
              "description": "경도",
              "enum": [],
              "nullable": true
            },
            "state": {
              "type": "string",
              "description": "상태 여부",
              "enum": [
                "ENABLED",
                "DISABLED"
              ],
              "nullable": false
            },
            "temperature": {
              "type": "string",
              "description": "협업 온도",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "storeId",
            "crawlerUrl",
            "name",
            "businessType",
            "address",
            "phone",
            "thumbnail",
            "snsLinks",
            "images",
            "content",
            "reviewImages",
            "merchantNumber",
            "latitude",
            "longitude",
            "state",
            "temperature",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "StoreOnReviewFindListWithInfoStoreReviewKeywordModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 카테고리 아이디",
              "nullable": false
            },
            "value": {
              "type": "string",
              "description": "상점 카테고리 값",
              "nullable": false
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            }
          },
          "required": [
            "id",
            "value",
            "createdAt"
          ]
        },
        "StoreOnReviewFindListWithAgreementsRequestModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "협약 요청 아이디",
              "nullable": false
            },
            "title": {
              "type": "string",
              "description": "협약 요청 제목",
              "nullable": false
            },
            "content": {
              "type": "string",
              "description": "콘텐츠",
              "nullable": false
            },
            "contentHtml": {
              "type": "string",
              "description": "콘텐츠 Html",
              "nullable": false
            },
            "startDate": {
              "format": "date-time",
              "type": "string",
              "description": "시작일",
              "nullable": true
            },
            "endDate": {
              "format": "date-time",
              "type": "string",
              "description": "종료일",
              "nullable": true
            },
            "serviceType": {
              "type": "string",
              "description": "협약 서비스 타입",
              "enum": [
                "AI",
                "EVENT",
                "PROMOTION"
              ],
              "nullable": false
            },
            "agreementsType": {
              "type": "string",
              "description": "협업 타입",
              "enum": [
                "PERSONAL",
                "GROUP"
              ],
              "nullable": false
            },
            "state": {
              "type": "string",
              "description": "협약 요청 상태",
              "enum": [
                "PENDING",
                "WATCHING",
                "STARTING",
                "END",
                "ACTIVE",
                "DISABLED"
              ],
              "nullable": false
            },
            "goals": {
              "description": "목표 성과",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "thumbnail": {
              "type": "string",
              "description": "썸네일 URL",
              "nullable": true
            },
            "images": {
              "description": "기타 이미지",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "participantCount": {
              "type": "number",
              "description": "참가 인원",
              "nullable": true
            },
            "requestStoreId": {
              "type": "number",
              "description": "생성 상점 아이디",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "title",
            "content",
            "contentHtml",
            "startDate",
            "endDate",
            "serviceType",
            "agreementsType",
            "state",
            "goals",
            "thumbnail",
            "images",
            "participantCount",
            "requestStoreId",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "StoreOnReviewFindListModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "상점 리뷰 아이디",
              "nullable": false
            },
            "count": {
              "type": "number",
              "description": "숫자 (리뷰 카운트 등)",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "storeReviewId": {
              "type": "number",
              "description": "협약 요청 리뷰 아이디",
              "nullable": false
            },
            "storeId": {
              "type": "number",
              "description": "리뷰 대상 상점 아이디",
              "nullable": false
            },
            "infoStoreReviewKeywordId": {
              "type": "number",
              "description": "상점 카테고리 아이디",
              "nullable": false
            },
            "agreementsRequestId": {
              "type": "number",
              "description": "협약 요청 아이디",
              "nullable": false
            },
            "storeReview": {
              "$ref": "#/components/schemas/StoreOnReviewFindListWithStoreReviewModel"
            },
            "store": {
              "$ref": "#/components/schemas/StoreOnReviewFindListWithStoreModel"
            },
            "infoStoreReviewKeyword": {
              "$ref": "#/components/schemas/StoreOnReviewFindListWithInfoStoreReviewKeywordModel"
            },
            "agreementsRequest": {
              "$ref": "#/components/schemas/StoreOnReviewFindListWithAgreementsRequestModel"
            }
          },
          "required": [
            "id",
            "count",
            "createdAt",
            "storeReviewId",
            "storeId",
            "infoStoreReviewKeywordId",
            "agreementsRequestId",
            "storeReview",
            "store",
            "infoStoreReviewKeyword",
            "agreementsRequest"
          ]
        },
        "StoreOnReviewFindListResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/StoreOnReviewFindListModel"
              }
            },
            "meta": {
              "description": "목록 조회용 메타 데이터",
              "allOf": [
                {
                  "$ref": "#/components/schemas/MetaDataDto"
                }
              ]
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "meta",
            "resultCode",
            "message"
          ]
        },
        "StoreReviewCreateDto": {
          "type": "object",
          "properties": {
            "nickname": {
              "type": "string",
              "description": "닉네임"
            },
            "content": {
              "type": "string",
              "description": "내용"
            },
            "images": {
              "description": "이미지 url",
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          "required": [
            "nickname",
            "content",
            "images"
          ]
        },
        "StoreReviewCreateModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "리뷰 아이디",
              "nullable": false
            }
          },
          "required": [
            "id"
          ]
        },
        "StoreReviewCreateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/StoreReviewCreateModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "StoreReviewUpdateDto": {
          "type": "object",
          "properties": {}
        },
        "StoreReviewUpdateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "StoreReviewDeleteResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "StoreReviewFindUniqueModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "리뷰 아이디",
              "nullable": false
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": false
            },
            "content": {
              "type": "string",
              "description": "내용",
              "nullable": false
            },
            "images": {
              "description": "이미지 URL",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "nickname",
            "content",
            "images",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "StoreReviewFindUniqueResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/StoreReviewFindUniqueModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "StoreReviewFindListModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "리뷰 아이디",
              "nullable": false
            },
            "nickname": {
              "type": "string",
              "description": "닉네임",
              "nullable": false
            },
            "content": {
              "type": "string",
              "description": "내용",
              "nullable": false
            },
            "images": {
              "description": "이미지 URL",
              "nullable": false,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "nickname",
            "content",
            "images",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "StoreReviewFindListResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/StoreReviewFindListModel"
              }
            },
            "meta": {
              "description": "목록 조회용 메타 데이터",
              "allOf": [
                {
                  "$ref": "#/components/schemas/MetaDataDto"
                }
              ]
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "meta",
            "resultCode",
            "message"
          ]
        },
        "AuthDefaultLoginDto": {
          "type": "object",
          "properties": {
            "loginId": {
              "type": "string",
              "description": "아이디"
            },
            "password": {
              "type": "string",
              "description": "패스워드"
            },
            "os": {
              "type": "string",
              "description": "운영체재 (App 필수)",
              "enum": [
                "IOS",
                "ANDROID",
                "WEB"
              ]
            },
            "hardwareVersion": {
              "type": "string",
              "description": "하드웨어 버전 (App 필수)"
            },
            "softwareVersion": {
              "type": "string",
              "description": "소프트웨어 버전 (App 필수)"
            },
            "userDeviceToken": {
              "type": "string",
              "description": "유저 디바이스 토큰 (App 필수)"
            }
          },
          "required": [
            "loginId",
            "password"
          ]
        },
        "AuthDefaultLoginResponseModel": {
          "type": "object",
          "properties": {
            "accessToken": {
              "type": "string",
              "description": "액세스 토큰",
              "nullable": false
            },
            "refreshToken": {
              "type": "string",
              "description": "리프레시 토큰",
              "nullable": false
            }
          },
          "required": [
            "accessToken",
            "refreshToken"
          ]
        },
        "AuthDefaultLoginResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/AuthDefaultLoginResponseModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "AuthAdminLoginDto": {
          "type": "object",
          "properties": {
            "loginId": {
              "type": "string",
              "description": "아이디"
            },
            "password": {
              "type": "string",
              "description": "패스워드"
            }
          },
          "required": [
            "loginId",
            "password"
          ]
        },
        "AuthAdminLoginResponseModel": {
          "type": "object",
          "properties": {
            "accessToken": {
              "type": "string",
              "description": "액세스 토큰",
              "nullable": false
            },
            "refreshToken": {
              "type": "string",
              "description": "리프레시 토큰",
              "nullable": false
            }
          },
          "required": [
            "accessToken",
            "refreshToken"
          ]
        },
        "AuthAdminLoginResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/AuthAdminLoginResponseModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "AuthOAuth2WebLoginDto": {
          "type": "object",
          "properties": {
            "code": {
              "type": "string",
              "description": "인가 코드"
            },
            "redirectUri": {
              "type": "string",
              "description": "리디렉션 URI"
            },
            "type": {
              "type": "string",
              "description": "로그인 타입",
              "enum": [
                "GOOGLE",
                "KAKAO",
                "NAVER"
              ]
            }
          },
          "required": [
            "code",
            "redirectUri",
            "type"
          ]
        },
        "AuthOAuth2WebLoginResponseModel": {
          "type": "object",
          "properties": {
            "accessToken": {
              "type": "string",
              "description": "액세스 토큰",
              "nullable": false
            },
            "refreshToken": {
              "type": "string",
              "description": "리프레시 토큰",
              "nullable": false
            }
          },
          "required": [
            "accessToken",
            "refreshToken"
          ]
        },
        "AuthOAuth2WebLoginResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/AuthOAuth2WebLoginResponseModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "AuthSendCodeDto": {
          "type": "object",
          "properties": {
            "value": {
              "type": "string",
              "description": "타입에 대한 값"
            },
            "type": {
              "type": "string",
              "description": "타입",
              "enum": [
                "SNS",
                "EMAIL"
              ]
            },
            "action": {
              "type": "string",
              "description": "액션",
              "enum": [
                "REGISTER",
                "PW_RENEW",
                "ID_RENEW"
              ]
            }
          },
          "required": [
            "value",
            "type",
            "action"
          ]
        },
        "AuthSendCodeResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "AuthVerifyCodeDto": {
          "type": "object",
          "properties": {
            "value": {
              "type": "string",
              "description": "타입에 대한 값"
            },
            "code": {
              "type": "string",
              "description": "코드"
            },
            "type": {
              "type": "string",
              "description": "타입",
              "enum": [
                "SNS",
                "EMAIL"
              ]
            },
            "action": {
              "type": "string",
              "description": "액션",
              "enum": [
                "REGISTER",
                "PW_RENEW",
                "ID_RENEW"
              ]
            }
          },
          "required": [
            "value",
            "code",
            "type",
            "action"
          ]
        },
        "AuthVerifyCodeResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "AuthLogoutResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "object",
              "description": "반환 데이터",
              "example": null
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "AuthPayloadResponseModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "아이디",
              "nullable": false
            },
            "isAdmin": {
              "type": "boolean",
              "description": "관리자 여부",
              "nullable": false
            }
          },
          "required": [
            "id",
            "isAdmin"
          ]
        },
        "AuthPayloadResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/AuthPayloadResponseModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "ChatRoomMemberCreateDto": {
          "type": "object",
          "properties": {
            "userId": {
              "type": "number",
              "description": "유저 아이디"
            }
          },
          "required": [
            "userId"
          ]
        },
        "ChatRoomCreateDto": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "채팅 타입",
              "enum": [
                "PERSONAL",
                "GROUP"
              ]
            },
            "chatMember": {
              "description": "채팅 유저 아이디",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ChatRoomMemberCreateDto"
              }
            }
          },
          "required": [
            "type",
            "chatMember"
          ]
        },
        "ChatRoomCreateModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "채팅방 아이디",
              "nullable": false
            }
          },
          "required": [
            "id"
          ]
        },
        "ChatRoomCreateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ChatRoomCreateModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "ChatRoomFindListWithChatMemberModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "채팅방 아이디",
              "nullable": false
            },
            "userId": {
              "type": "number",
              "description": "유저 아이디",
              "nullable": false
            },
            "chatRoomId": {
              "type": "number",
              "description": "채팅방 아이디",
              "nullable": false
            },
            "lastReadAt": {
              "format": "date-time",
              "type": "string",
              "description": "메세지 읽은 시간",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "userId",
            "chatRoomId",
            "lastReadAt",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "ChatRoomFindListWithChatMessageModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "채팅방 아이디",
              "nullable": false
            },
            "chatRoomId": {
              "type": "number",
              "description": "채팅방 아이디",
              "nullable": false
            },
            "senderId": {
              "type": "number",
              "description": "발신자 유저 아이디",
              "nullable": false
            },
            "content": {
              "type": "string",
              "description": "텍스트 메세지",
              "nullable": true
            },
            "imageUrl": {
              "type": "string",
              "description": "이미지 url",
              "nullable": true
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            }
          },
          "required": [
            "id",
            "chatRoomId",
            "senderId",
            "content",
            "imageUrl",
            "createdAt",
            "updatedAt",
            "deletedAt"
          ]
        },
        "ChatRoomFindListModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "채팅방 아이디",
              "nullable": false
            },
            "type": {
              "type": "string",
              "description": "채팅 타입",
              "enum": [
                "PERSONAL",
                "GROUP"
              ],
              "nullable": false
            },
            "agreementsRequestId": {
              "type": "number",
              "description": "협업 요청 아이디",
              "enum": [],
              "nullable": false
            },
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "생성일",
              "nullable": false
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "수정일",
              "nullable": false
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "삭제일",
              "nullable": true
            },
            "chatMember": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ChatRoomFindListWithChatMemberModel"
              }
            },
            "chatMessage": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ChatRoomFindListWithChatMessageModel"
              }
            }
          },
          "required": [
            "id",
            "type",
            "agreementsRequestId",
            "createdAt",
            "updatedAt",
            "deletedAt",
            "chatMember",
            "chatMessage"
          ]
        },
        "ChatRoomFindListResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ChatRoomFindListModel"
              }
            },
            "meta": {
              "description": "목록 조회용 메타 데이터",
              "allOf": [
                {
                  "$ref": "#/components/schemas/MetaDataDto"
                }
              ]
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "meta",
            "resultCode",
            "message"
          ]
        },
        "ChatMessageCreateDto": {
          "type": "object",
          "properties": {
            "chatRoomId": {
              "type": "number",
              "description": "채팅방 아이디",
              "nullable": false
            },
            "content": {
              "type": "string",
              "description": "텍스트 메세지",
              "nullable": true
            },
            "imageUrl": {
              "type": "string",
              "description": "이미지 url",
              "nullable": true
            }
          },
          "required": [
            "chatRoomId",
            "content",
            "imageUrl"
          ]
        },
        "ChatMessageCreateModel": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "description": "채팅방 아이디",
              "nullable": false
            }
          },
          "required": [
            "id"
          ]
        },
        "ChatMessageCreateResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "$ref": "#/components/schemas/ChatMessageCreateModel"
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "UploadImagesDto": {
          "type": "object",
          "properties": {
            "images": {
              "type": "array",
              "description": "image 파일",
              "items": {
                "type": "string",
                "format": "binary"
              }
            }
          },
          "required": [
            "images"
          ]
        },
        "UploadImagesResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "description": "이미지 URL | path 맨 뒤에 original.png 필요",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "UploadHtmlDto": {
          "type": "object",
          "properties": {
            "html": {
              "type": "array",
              "description": "html 파일",
              "items": {
                "type": "string",
                "format": "binary"
              }
            }
          },
          "required": [
            "html"
          ]
        },
        "UploadHtmlResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "description": "HTML 업로드 url",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "UploadPdfDto": {
          "type": "object",
          "properties": {
            "pdf": {
              "type": "array",
              "description": "pdf 파일",
              "items": {
                "type": "string",
                "format": "binary"
              }
            }
          },
          "required": [
            "pdf"
          ]
        },
        "UploadPdfResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "description": "PDF 업로드 url",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        },
        "UploadFilesDto": {
          "type": "object",
          "properties": {
            "files": {
              "type": "array",
              "description": "일반 파일",
              "items": {
                "type": "string",
                "format": "binary"
              }
            }
          },
          "required": [
            "files"
          ]
        },
        "UploadFilesResponseDto": {
          "type": "object",
          "properties": {
            "data": {
              "description": "일반 파일 업로드 url",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "resultCode": {
              "type": "number",
              "description": "반환 코드",
              "example": 999999
            },
            "message": {
              "type": "string",
              "description": "반환 메세지",
              "example": "결과 메세지가 반환됩니다."
            }
          },
          "required": [
            "data",
            "resultCode",
            "message"
          ]
        }
      }
    }
  },
  "customOptions": {
    "operationsSorter": "alpha",
    "defaultModelsExpandDepth": -1,
    "persistAuthorization": true
  }
};
  url = options.swaggerUrl || url
  let urls = options.swaggerUrls
  let customOptions = options.customOptions
  let spec1 = options.swaggerDoc
  let swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (let attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  let ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.initOAuth) {
    ui.initOAuth(customOptions.initOAuth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }
  
  window.ui = ui
}
