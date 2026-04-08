#!/usr/bin/env python3
"""Module creating multiplier function."""


from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """REturns a function that multiplies multiplier to a float"""
    def multiply(x: float) -> float:
        """multiplies x to multiplier"""
        return x * multiplier
    return multiply
