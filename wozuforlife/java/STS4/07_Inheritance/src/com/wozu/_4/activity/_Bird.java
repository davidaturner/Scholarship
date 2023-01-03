package com.wozu._4.activity;

class _Bird extends _Bird_Animal {
	public static String BIRD_BIRTHMETHOD = "eggs";
	
    boolean flies;

    public _Bird() {
        super();
        flies = true;
    }

    public _Bird(String name, boolean flies) {
        super(name, BIRD_BIRTHMETHOD);
        this.flies = flies;
    }
}
