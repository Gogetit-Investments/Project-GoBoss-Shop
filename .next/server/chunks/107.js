"use strict";
exports.id = 107;
exports.ids = [107];
exports.modules = {

/***/ 7674:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CategoryFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_icons_chevron_left__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5019);
/* harmony import */ var _components_icons_chevron_right__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5133);
/* harmony import */ var _lib_hooks_use_scrollable_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1135);
/* harmony import */ var _data_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(711);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_category__WEBPACK_IMPORTED_MODULE_6__]);
_data_category__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function CategoryItem({ categoryName , isActive , onClick  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: onClick,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('h-[30px] shrink-0 !rounded-full border py-1.5 px-3.5 text-xs font-medium outline-none', {
            'border-dark-100 bg-dark-100 text-light-100 transition-opacity duration-200 hover:opacity-90 focus:opacity-90 dark:border-light dark:bg-light dark:text-dark-100': isActive,
            'border-light-500 bg-light-400 text-dark-100 hover:bg-light-500 dark:border-dark-500 dark:bg-dark-400 dark:text-light-100 hover:dark:bg-dark-500 hover:dark:text-light': !isActive
        }),
        children: categoryName
    }));
}
function CategoryFilter({ defaultActivePath ='/'  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { categories  } = (0,_data_category__WEBPACK_IMPORTED_MODULE_6__/* .useCategories */ .L)({
        limit: 100
    });
    const { sliderEl , sliderPrevBtn , sliderNextBtn , scrollToTheRight , scrollToTheLeft ,  } = (0,_lib_hooks_use_scrollable_slider__WEBPACK_IMPORTED_MODULE_5__/* .useScrollableSlider */ .h)(defaultActivePath);
    function handleClick(categorySlug) {
        router.push({
            pathname: router.pathname,
            ...categorySlug !== defaultActivePath && {
                query: {
                    category: categorySlug
                }
            }
        });
    }
    function handleFree() {
        router.push({
            pathname: router.pathname,
            query: {
                price: '0,0'
            }
        });
    }
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)('common');
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "app-category-filter-bar sticky top-16 z-20 flex min-h-[64px] w-full overflow-hidden border-b border-light-400 bg-light-100 px-4 py-4 dark:border-dark-300 dark:bg-dark-100 sm:top-[70px] sm:min-h-[70px] sm:px-5 sm:py-5 md:px-6 lg:px-7 3xl:px-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                title: t('text-prev'),
                ref: sliderPrevBtn,
                onClick: ()=>scrollToTheLeft()
                ,
                className: "invisible absolute top-1/2 left-2 z-[1] -mt-3 flex h-6 w-6 items-center justify-start rounded-full text-dark-800 opacity-0 before:pointer-events-none before:absolute before:-top-2 before:left-1 before:-z-[1] before:block before:h-9 before:w-9 before:bg-gradient-to-r before:from-light-100 before:via-light-100 before:content-[''] hover:text-dark focus:text-dark dark:before:from-dark-100 dark:before:via-dark-100 dark:hover:text-light dark:focus:text-light sm:left-3 md:left-4 lg:left-6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_chevron_left__WEBPACK_IMPORTED_MODULE_3__/* .ChevronLeft */ .s, {
                    className: "h-[18px] w-[18px]"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "-mb-4 flex items-start overflow-hidden",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "-mb-7 flex w-full gap-3 overflow-x-auto scroll-smooth pb-7",
                    ref: sliderEl,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CategoryItem, {
                            categoryName: t('text-category-all'),
                            isActive: defaultActivePath === router.asPath,
                            onClick: ()=>handleClick(defaultActivePath)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CategoryItem, {
                            categoryName: t('text-free'),
                            isActive: Boolean(router.query.price),
                            onClick: handleFree
                        }),
                        categories.filter((category)=>category.slug.toLowerCase() !== 'free'
                        ).map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CategoryItem, {
                                categoryName: category.name,
                                isActive: category.slug === router.query.category,
                                onClick: ()=>handleClick(category.slug)
                            }, category.id)
                        )
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                title: t('text-next'),
                ref: sliderNextBtn,
                onClick: ()=>scrollToTheRight()
                ,
                className: "invisible absolute top-1/2 right-2 z-[1] -mt-3 flex h-6 w-6 items-center justify-end rounded-full text-dark-800 opacity-0 after:pointer-events-none after:absolute after:-top-2 after:right-1 after:-z-[1] after:block after:h-9 after:w-9 after:bg-gradient-to-l after:from-light-100 after:via-light-100 after:content-[''] hover:text-dark focus:text-dark dark:after:from-dark-100 dark:after:via-dark-100 dark:hover:text-light dark:focus:text-light sm:right-3 md:right-4 lg:right-6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_chevron_right__WEBPACK_IMPORTED_MODULE_4__/* .ChevronRight */ ._, {
                    className: "h-[18px] w-[18px]"
                })
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 711:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useCategories)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1880);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7607);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_client__WEBPACK_IMPORTED_MODULE_2__]);
_data_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function useCategories(options) {
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const formattedOptions = {
        ...options,
        language: locale
    };
    const { data , isLoading , error , fetchNextPage , hasNextPage , isFetchingNextPage ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useInfiniteQuery)([
        _data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.CATEGORIES */ .P.CATEGORIES,
        formattedOptions
    ], ({ queryKey , pageParam  })=>_data_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].categories.all */ .Z.categories.all(Object.assign({}, queryKey[1], pageParam))
    , {
        getNextPageParam: ({ current_page , last_page  })=>last_page > current_page && {
                page: current_page + 1
            }
    });
    function handleLoadMore() {
        fetchNextPage();
    }
    var ref;
    return {
        categories: (ref = data === null || data === void 0 ? void 0 : data.pages.flatMap((page)=>page.data
        )) !== null && ref !== void 0 ? ref : [],
        paginatorInfo: Array.isArray(data === null || data === void 0 ? void 0 : data.pages) ? data === null || data === void 0 ? void 0 : data.pages[data.pages.length - 1] : null,
        hasNextPage,
        isLoadingMore: isFetchingNextPage,
        isLoading,
        error,
        loadMore: handleLoadMore
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);


const Seo = ({ title , description , url , ...props })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
        title: title,
        description: description,
        openGraph: {
            url: `${"http://localhost:3000"}/${url}`,
            title,
            description
        },
        ...props
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);


/***/ }),

/***/ 1135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useScrollableSlider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


function useScrollableSlider(defaultActivePath = '/') {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const sliderEl = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const sliderPrevBtn = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const sliderNextBtn = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    function scrollToTheRight() {
        let offsetWidth = sliderEl.current.offsetWidth;
        sliderEl.current.scrollLeft += offsetWidth / 2;
        sliderPrevBtn.current.classList.remove('opacity-0', 'invisible');
    }
    function scrollToTheLeft() {
        let offsetWidth = sliderEl.current.offsetWidth;
        sliderEl.current.scrollLeft -= offsetWidth / 2;
        sliderNextBtn.current.classList.remove('opacity-0', 'invisible');
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const filterBarEl = sliderEl.current;
        const prevBtn = sliderPrevBtn.current;
        const nextBtn = sliderNextBtn.current;
        initNextBtnVisibility();
        // @ts-ignore
        function initNextBtnVisibility() {
            let offsetWidth = filterBarEl.offsetWidth;
            let scrollWidth = filterBarEl.scrollWidth;
            // show next btn when scrollWidth is gather than offsetWidth
            if (scrollWidth > offsetWidth) {
                nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.classList.remove('opacity-0', 'invisible');
            } else {
                nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.classList.add('opacity-0', 'invisible');
            }
        }
        function visibleNextAndPrevBtnOnScroll() {
            let newScrollLeft = filterBarEl.scrollLeft, offsetWidth = filterBarEl.offsetWidth, scrollWidth = filterBarEl.scrollWidth;
            // reach to the right end
            if (scrollWidth - newScrollLeft == offsetWidth) {
                nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.classList.add('opacity-0', 'invisible');
                prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.classList.remove('opacity-0', 'invisible');
            } else {
                nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.classList.remove('opacity-0', 'invisible');
            }
            // reach to the left end
            if (newScrollLeft === 0) {
                prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.classList.add('opacity-0', 'invisible');
                nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.classList.remove('opacity-0', 'invisible');
            } else {
                prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.classList.remove('opacity-0', 'invisible');
            }
        }
        window.addEventListener('resize', initNextBtnVisibility);
        filterBarEl.addEventListener('scroll', visibleNextAndPrevBtnOnScroll);
        // clear event
        return ()=>{
            window.removeEventListener('resize', initNextBtnVisibility);
            filterBarEl.removeEventListener('scroll', visibleNextAndPrevBtnOnScroll);
        };
    }, []);
    // back to initial position for home
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (router.asPath === defaultActivePath) {
            scrollToTheLeft();
        }
    }, [
        router.asPath,
        defaultActivePath
    ]);
    return {
        sliderEl,
        sliderPrevBtn,
        sliderNextBtn,
        scrollToTheRight,
        scrollToTheLeft
    };
}


/***/ })

};
;