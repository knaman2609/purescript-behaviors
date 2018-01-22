// Generated by purs bundle 0.11.7
var PS = {};
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Semigroupoid = function (compose) {
      this.compose = compose;
  };
  var semigroupoidFn = new Semigroupoid(function (f) {
      return function (g) {
          return function (x) {
              return f(g(x));
          };
      };
  });
  var compose = function (dict) {
      return dict.compose;
  };
  exports["compose"] = compose;
  exports["Semigroupoid"] = Semigroupoid;
  exports["semigroupoidFn"] = semigroupoidFn;
})(PS["Control.Semigroupoid"] = PS["Control.Semigroupoid"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Category = PS["Control.Category"];
  var $$const = function (a) {
      return function (v) {
          return a;
      };
  };
  var applyFlipped = function (x) {
      return function (f) {
          return f(x);
      };
  };
  exports["const"] = $$const;
  exports["applyFlipped"] = applyFlipped;
})(PS["Data.Function"] = PS["Data.Function"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Data.Functor"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Function = PS["Data.Function"];
  var Data_Unit = PS["Data.Unit"];        
  var Functor = function (map) {
      this.map = map;
  };
  var map = function (dict) {
      return dict.map;
  };
  exports["Functor"] = Functor;
  exports["map"] = map;
})(PS["Data.Functor"] = PS["Data.Functor"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Data_Functor = PS["Data.Functor"];
  var Data_Semigroup = PS["Data.Semigroup"];        
  var Alt = function (Functor0, alt) {
      this.Functor0 = Functor0;
      this.alt = alt;
  };                                                       
  var alt = function (dict) {
      return dict.alt;
  };
  exports["Alt"] = Alt;
  exports["alt"] = alt;
})(PS["Control.Alt"] = PS["Control.Alt"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["Control.Apply"];
  var Control_Category = PS["Control.Category"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];        
  var Apply = function (Functor0, apply) {
      this.Functor0 = Functor0;
      this.apply = apply;
  };                      
  var apply = function (dict) {
      return dict.apply;
  };
  exports["Apply"] = Apply;
  exports["apply"] = apply;
})(PS["Control.Apply"] = PS["Control.Apply"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Apply = PS["Control.Apply"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Unit = PS["Data.Unit"];        
  var Applicative = function (Apply0, pure) {
      this.Apply0 = Apply0;
      this.pure = pure;
  };
  var pure = function (dict) {
      return dict.pure;
  };
  exports["Applicative"] = Applicative;
  exports["pure"] = pure;
})(PS["Control.Applicative"] = PS["Control.Applicative"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Data_Functor = PS["Data.Functor"];        
  var Plus = function (Alt0, empty) {
      this.Alt0 = Alt0;
      this.empty = empty;
  };       
  var empty = function (dict) {
      return dict.empty;
  };
  exports["Plus"] = Plus;
  exports["empty"] = empty;
})(PS["Control.Plus"] = PS["Control.Plus"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Plus = PS["Control.Plus"];
  var Data_Functor = PS["Data.Functor"];        
  var Alternative = function (Applicative0, Plus1) {
      this.Applicative0 = Applicative0;
      this.Plus1 = Plus1;
  };
  exports["Alternative"] = Alternative;
})(PS["Control.Alternative"] = PS["Control.Alternative"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Extend = PS["Control.Extend"];
  var Control_Monad = PS["Control.Monad"];
  var Control_MonadZero = PS["Control.MonadZero"];
  var Control_Plus = PS["Control.Plus"];
  var Data_Bounded = PS["Data.Bounded"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var Nothing = (function () {
      function Nothing() {

      };
      Nothing.value = new Nothing();
      return Nothing;
  })();
  var Just = (function () {
      function Just(value0) {
          this.value0 = value0;
      };
      Just.create = function (value0) {
          return new Just(value0);
      };
      return Just;
  })();
  var maybe = function (v) {
      return function (v1) {
          return function (v2) {
              if (v2 instanceof Nothing) {
                  return v;
              };
              if (v2 instanceof Just) {
                  return v1(v2.value0);
              };
              throw new Error("Failed pattern match at Data.Maybe line 219, column 1 - line 219, column 51: " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
          };
      };
  };                                                         
  var isJust = maybe(false)(Data_Function["const"](true));
  var fromJust = function (dictPartial) {
      return function (v) {
          var __unused = function (dictPartial1) {
              return function ($dollar34) {
                  return $dollar34;
              };
          };
          return __unused(dictPartial)((function () {
              if (v instanceof Just) {
                  return v.value0;
              };
              throw new Error("Failed pattern match at Data.Maybe line 270, column 1 - line 270, column 46: " + [ v.constructor.name ]);
          })());
      };
  };
  exports["Nothing"] = Nothing;
  exports["Just"] = Just;
  exports["maybe"] = maybe;
  exports["isJust"] = isJust;
  exports["fromJust"] = fromJust;
})(PS["Data.Maybe"] = PS["Data.Maybe"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Extend = PS["Control.Extend"];
  var Control_Monad = PS["Control.Monad"];
  var Data_Bifoldable = PS["Data.Bifoldable"];
  var Data_Bifunctor = PS["Data.Bifunctor"];
  var Data_Bitraversable = PS["Data.Bitraversable"];
  var Data_Bounded = PS["Data.Bounded"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Data_Traversable = PS["Data.Traversable"];
  var Prelude = PS["Prelude"];        
  var Left = (function () {
      function Left(value0) {
          this.value0 = value0;
      };
      Left.create = function (value0) {
          return new Left(value0);
      };
      return Left;
  })();
  var Right = (function () {
      function Right(value0) {
          this.value0 = value0;
      };
      Right.create = function (value0) {
          return new Right(value0);
      };
      return Right;
  })();
  var either = function (v) {
      return function (v1) {
          return function (v2) {
              if (v2 instanceof Left) {
                  return v(v2.value0);
              };
              if (v2 instanceof Right) {
                  return v1(v2.value0);
              };
              throw new Error("Failed pattern match at Data.Either line 229, column 1 - line 229, column 64: " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
          };
      };
  };
  var hush = either(Data_Function["const"](Data_Maybe.Nothing.value))(Data_Maybe.Just.create);
  exports["Left"] = Left;
  exports["Right"] = Right;
  exports["either"] = either;
  exports["hush"] = hush;
})(PS["Data.Either"] = PS["Data.Either"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Array = PS["Data.Array"];
  var Data_Either = PS["Data.Either"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Map = PS["Data.Map"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Tuple = PS["Data.Tuple"];
  var Prelude = PS["Prelude"];        
  var Filterable = function (Functor0, filter, filterMap, partition, partitionMap) {
      this.Functor0 = Functor0;
      this.filter = filter;
      this.filterMap = filterMap;
      this.partition = partition;
      this.partitionMap = partitionMap;
  };
  var partitionMap = function (dict) {
      return dict.partitionMap;
  };
  var partition = function (dict) {
      return dict.partition;
  }; 
  var filterMap = function (dict) {
      return dict.filterMap;
  };
  var filter = function (dict) {
      return dict.filter;
  };
  exports["Filterable"] = Filterable;
  exports["partitionMap"] = partitionMap;
  exports["partition"] = partition;
  exports["filterMap"] = filterMap;
  exports["filter"] = filter;
})(PS["Data.Filterable"] = PS["Data.Filterable"] || {});
(function(exports) {
    "use strict";

  exports.pureImpl = function (a) {
    return function(sub) {
      sub(a);
      return function() {};
    }
  };

  exports.mapImpl = function (f) {
    return function(e) {
      return function (sub) {
        return e(function(a) {
          sub(f(a));
        });
      }
    };
  };

  exports.never = function (sub) {
    return function() {};
  };

  exports.applyImpl = function (e1) {
    return function (e2) {
      return function(sub) {
        var a_latest, b_latest;
        var a_fired = false, b_fired = false;

        var cancel1 = e1(function(a) {
          a_latest = a;
          a_fired = true;

          if (b_fired) {
            sub(a_latest(b_latest));
          }
        });

        var cancel2 = e2(function(b) {
          b_latest = b;
          b_fired = true;

          if (a_fired) {
            sub(a_latest(b_latest));
          }
        });

        return function() {
          cancel1();
          cancel2();
        };
      };
    };
  };

  exports.mergeImpl = function (e1) {
    return function(e2) {
      return function(sub) {
        var cancel1 = e1(sub);
        var cancel2 = e2(sub);

        return function() {
          cancel1();
          cancel2();
        };
      }
    };
  };

  exports.fold = function (f) {
    return function(e) {
      return function(b) {
        return function(sub) {
          var result = b;

          return e(function(a) {
            sub(result = f(a)(result));
          });
        };
      };
    };
  };

  exports.filter = function (p) {
    return function(e) {
      return function(sub) {
        return e(function(a) {
          if (p(a)) {
            sub(a);
          }
        });
      };
    };
  };

  exports.sampleOn = function (e1) {
    return function (e2) {
      return function(sub) {
        var latest;
        var fired = false;

        var cancel1 = e1(function(a) {
          latest = a;
          fired = true;
        });

        var cancel2 = e2(function(f) {
          if (fired) {
            sub(f(latest));
          }
        });

        return function() {
          cancel1();
          cancel2();
        };
      };
    };
  };

  exports.subscribe = function (e) {
    return function(f) {
      return function() {
        return e(function(a) {
          f(a)();
        });
      };
    };
  };

  exports.keepLatest = function (e) {
    return function(sub) {
      var cancelInner;

      var cancelOuter = e(function(inner) {
        cancelInner && cancelInner();
        cancelInner = inner(sub);
      });

      return function() {
        cancelInner && cancelInner();
        cancelOuter();
      }
    };
  };

  function subject() {
    var subs = [];
    return {
      event: function(sub) {
        subs.push(sub);
        return function() {
          var index = subs.indexOf(sub);
          if (index >= 0) {
            subs.splice(index, 1);
          }
        };
      },
      push: function(a) {
        for (var i = 0; i < subs.length; i++) {
          subs[i](a);
        }
      }
    };
  };

  exports.fix = function(f) {
    var s = subject();
    var io = f(s.event);

    return function(sub) {
      var cancel1 = io.input(s.push);
      var cancel2 = io.output(sub);

      return function() {
        cancel1();
        cancel2();
      };
    };
  };
})(PS["FRP.Event"] = PS["FRP.Event"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Category = PS["Control.Category"];
  var Data_Filterable = PS["Data.Filterable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Tuple = PS["Data.Tuple"];
  var Prelude = PS["Prelude"];        
  var IsEvent = function (Alternative0, Filterable1, fix, fold, keepLatest, sampleOn) {
      this.Alternative0 = Alternative0;
      this.Filterable1 = Filterable1;
      this.fix = fix;
      this.fold = fold;
      this.keepLatest = keepLatest;
      this.sampleOn = sampleOn;
  };
  var sampleOn = function (dict) {
      return dict.sampleOn;
  };
  var keepLatest = function (dict) {
      return dict.keepLatest;
  };
  var fold = function (dict) {
      return dict.fold;
  };
  var fix = function (dict) {
      return dict.fix;
  };
  exports["IsEvent"] = IsEvent;
  exports["fold"] = fold;
  exports["sampleOn"] = sampleOn;
  exports["keepLatest"] = keepLatest;
  exports["fix"] = fix;
})(PS["FRP.Event.Class"] = PS["FRP.Event.Class"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var $foreign = PS["FRP.Event"];
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Plus = PS["Control.Plus"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Either = PS["Data.Either"];
  var Data_Filterable = PS["Data.Filterable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var FRP = PS["FRP"];
  var FRP_Event_Class = PS["FRP.Event.Class"];
  var Partial_Unsafe = PS["Partial.Unsafe"];
  var Prelude = PS["Prelude"];        
  var functorEvent = new Data_Functor.Functor($foreign.mapImpl);
  var filterableEvent = new Data_Filterable.Filterable(function () {
      return functorEvent;
  }, $foreign.filter, function (f) {
      return function ($3) {
          return Data_Functor.map(functorEvent)(Data_Maybe.fromJust())($foreign.filter(Data_Maybe.isJust)(Data_Functor.map(functorEvent)(f)($3)));
      };
  }, function (p) {
      return function (xs) {
          return {
              yes: $foreign.filter(p)(xs),
              no: $foreign.filter(function ($4) {
                  return !p($4);
              })(xs)
          };
      };
  }, function (f) {
      return function (xs) {
          return {
              left: Data_Filterable.filterMap(filterableEvent)(function ($5) {
                  return Data_Either.either(Data_Maybe.Just.create)(Data_Function["const"](Data_Maybe.Nothing.value))(f($5));
              })(xs),
              right: Data_Filterable.filterMap(filterableEvent)(function ($6) {
                  return Data_Either.hush(f($6));
              })(xs)
          };
      };
  });
  var applyEvent = new Control_Apply.Apply(function () {
      return functorEvent;
  }, $foreign.applyImpl);
  var applicativeEvent = new Control_Applicative.Applicative(function () {
      return applyEvent;
  }, $foreign.pureImpl);
  var altEvent = new Control_Alt.Alt(function () {
      return functorEvent;
  }, $foreign.mergeImpl);
  var plusEvent = new Control_Plus.Plus(function () {
      return altEvent;
  }, $foreign.never);
  var alternativeEvent = new Control_Alternative.Alternative(function () {
      return applicativeEvent;
  }, function () {
      return plusEvent;
  });
  var eventIsEvent = new FRP_Event_Class.IsEvent(function () {
      return alternativeEvent;
  }, function () {
      return filterableEvent;
  }, $foreign.fix, $foreign.fold, $foreign.keepLatest, $foreign.sampleOn);
  exports["functorEvent"] = functorEvent;
  exports["filterableEvent"] = filterableEvent;
  exports["applyEvent"] = applyEvent;
  exports["applicativeEvent"] = applicativeEvent;
  exports["altEvent"] = altEvent;
  exports["plusEvent"] = plusEvent;
  exports["alternativeEvent"] = alternativeEvent;
  exports["eventIsEvent"] = eventIsEvent;
  exports["subscribe"] = $foreign.subscribe;
})(PS["FRP.Event"] = PS["FRP.Event"] || {});
(function(exports) {
  // Generated by purs version 0.11.7
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Category = PS["Control.Category"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_EuclideanRing = PS["Data.EuclideanRing"];
  var Data_Filterable = PS["Data.Filterable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Tuple = PS["Data.Tuple"];
  var FRP = PS["FRP"];
  var FRP_Event = PS["FRP.Event"];
  var FRP_Event_Class = PS["FRP.Event.Class"];
  var FRP_Event_Time = PS["FRP.Event.Time"];
  var Prelude = PS["Prelude"];
  var step = function (dictIsEvent) {
      return function (a) {
          return function (e) {
              return FRP_Event_Class.sampleOn(dictIsEvent)(Control_Alt.alt(((dictIsEvent.Alternative0()).Plus1()).Alt0())(Control_Applicative.pure((dictIsEvent.Alternative0()).Applicative0())(a))(e));
          };
      };
  };
  var sample = function (v) {
      return function (e) {
          return v(e);
      };
  };
  var functorABehavior = function (dictFunctor) {
      return new Data_Functor.Functor(function (f) {
          return function (v) {
              return function (e) {
                  return v(Data_Functor.map(dictFunctor)(function (v1) {
                      return function ($66) {
                          return v1(f($66));
                      };
                  })(e));
              };
          };
      });
  };
  var sampleBy = function (dictIsEvent) {
      return function (f) {
          return function (b) {
              return function (e) {
                  return sample(Data_Functor.map(functorABehavior((dictIsEvent.Filterable1()).Functor0()))(f)(b))(Data_Functor.map((dictIsEvent.Filterable1()).Functor0())(Data_Function.applyFlipped)(e));
              };
          };
      };
  };
  var sample_ = function (dictIsEvent) {
      return sampleBy(dictIsEvent)(Data_Function["const"]);
  };
  var applyABehavior = function (dictFunctor) {
      return new Control_Apply.Apply(function () {
          return functorABehavior(dictFunctor);
      }, function (v) {
          return function (v1) {
              return function (e) {
                  return v1(v(Data_Functor.map(dictFunctor)(Control_Semigroupoid.compose(Control_Semigroupoid.semigroupoidFn))(e)));
              };
          };
      });
  };
  exports["step"] = step;
  exports["sample"] = sample;
  exports["sampleBy"] = sampleBy;
  exports["sample_"] = sample_;
  exports["functorABehavior"] = functorABehavior;
  exports["applyABehavior"] = applyABehavior;
})(PS["FRP.Behavior"] = PS["FRP.Behavior"] || {});
(function(exports) {exports.create = function () {
    var subs = [];
    return {
      event: function(sub) {
        subs.push(sub);
      },
      push: function(a) {
        return function() {
          for (var i = 0; i < subs.length; i++) {
            subs[i](a);
          }
        };
      }
    };
  };

  exports.rotate = function(id) {
    return function(direction) {
      return function() {
        var elem = document.querySelectorAll("." + id)[0];

        if (direction == "stop") {
          elem.className = "hex " + id;
        } else {
          elem.className += " rotate " + direction;
        }
      }
    }
  }

  exports.attachEvents = function(id) {
    return function(sub) {
      var elem = document.querySelectorAll("." + id)[0];

      if (!window.MAP) {
        window.MAP = {};
      }

      var cb = function(e) {
        if (typeof window.MAP[id] == "undefined") {
          window.MAP[id] = 1;
        }

        if (window.MAP[id] == 1) {
          window.MAP[id] =  0;
          elem.querySelectorAll("img")[0].src = "hex.png";
        } else {
          window.MAP[id] =  1;
          elem.querySelectorAll("img")[0].src = "hex_checked.png";
        }

        sub(window.MAP[id])();
      };

      window.SUB = sub;
      elem.addEventListener("click", cb);
    }
  }
})(PS["Main"] = PS["Main"] || {});
(function(exports) {
    "use strict";
  var $foreign = PS["Main"];
  var Control_Alt = PS["Control.Alt"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Eff_Console = PS["Control.Monad.Eff.Console"];
  var Control_Plus = PS["Control.Plus"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Maybe = PS["Data.Maybe"];
  var FRP = PS["FRP"];
  var FRP_Behavior = PS["FRP.Behavior"];
  var FRP_Event = PS["FRP.Event"];
  var $$Math = PS["Math"];
  var Prelude = PS["Prelude"];        
  var Id = function (x) {
      return x;
  };
  var Direction = function (x) {
      return x;
  };
  var stopAll = function __do() {
      $foreign.rotate("hex1")("stop")();
      $foreign.rotate("hex2")("stop")();
      return $foreign.rotate("hex3")("stop")();
  };
  var runSystem = function (a) {
      return function (b) {
          return function (c) {
              return a && (b && c);
          };
      };
  };
  var rotateAll = function __do() {
      $foreign.rotate("hex1")("clockwise")();
      $foreign.rotate("hex2")("anti-clockwise")();
      return $foreign.rotate("hex3")("clockwise")();
  };
  var getSig = function (id) {
      return function __do() {
          var v = $foreign.create();
          var behavior = FRP_Behavior.step(FRP_Event.eventIsEvent)(true)(v.event);
          var x = $foreign.attachEvents(id)(v.push);
          return {
              behavior: behavior,
              event: v.event
          };
      };
  };
  var main = function __do() {
      var v = getSig("hex1")();
      var v1 = getSig("hex2")();
      var v2 = getSig("hex3")();
      var behavior = Control_Apply.apply(FRP_Behavior.applyABehavior(FRP_Event.functorEvent))(Control_Apply.apply(FRP_Behavior.applyABehavior(FRP_Event.functorEvent))(Data_Functor.map(FRP_Behavior.functorABehavior(FRP_Event.functorEvent))(runSystem)(v.behavior))(v1.behavior))(v2.behavior);
      return FRP_Event.subscribe(FRP_Behavior.sample_(FRP_Event.eventIsEvent)(behavior)(Control_Alt.alt(FRP_Event.altEvent)(Control_Alt.alt(FRP_Event.altEvent)(v.event)(v1.event))(v2.event)))(function (x) {
          if (x) {
              return rotateAll;
          };
          return stopAll;
      })();
  };
  exports["Id"] = Id;
  exports["Direction"] = Direction;
  exports["rotateAll"] = rotateAll;
  exports["stopAll"] = stopAll;
  exports["getSig"] = getSig;
  exports["runSystem"] = runSystem;
  exports["main"] = main;
  exports["create"] = $foreign.create;
  exports["rotate"] = $foreign.rotate;
  exports["attachEvents"] = $foreign.attachEvents;
})(PS["Main"] = PS["Main"] || {});
PS["Main"].main();
